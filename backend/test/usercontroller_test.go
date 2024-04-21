package test

import (
	"bytes"
	"encoding/json"
	"github.com/DATA-DOG/go-sqlmock"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"net/http/httptest"
	"testing"
	"time"
	"treasuretrove/api/controllers"
	"treasuretrove/api/models"
)

// Test_GetAllUsers_ShouldBeFound tests the GetAllUsers function
func Test_GetAllUsers_ShouldBeFound(test *testing.T) {
	sqlMock := ChangeToMockDb()
	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"ID", "Username", "Email", "Password"})
	expectedRows.AddRow(1, "TestUser1", "testuser1@mail.com", "testPassword1")
	expectedRows.AddRow(2, "TestUser2", "testuser2@mail.com", "testPassword2")

	// Define the expected query
	sqlMock.ExpectQuery("SELECT \\* FROM \"users\"").WillReturnRows(expectedRows)

	//new instance of the controller
	userController := controllers.UserController{}
	//and a new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	userController.GetAllUsers(context)

	assert.Equal(test, 200, context.Writer.Status())

	// Check the results
	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}

// Test_CreateUser_ShouldBeCreated tests the GetUserById function
func Test_CreateUser_ShouldBeCreated(test *testing.T) {
	sqlMock := ChangeToMockDb()

	//transaction begin
	sqlMock.ExpectBegin()

	// insert query mock
	sqlMock.ExpectQuery("INSERT INTO \"users\"").WillReturnRows(sqlmock.NewRows([]string{"ID", "created_at"}).AddRow(1, time.Now()))

	// transaction commit
	sqlMock.ExpectCommit()

	//new instance of the controller
	userController := controllers.UserController{}
	//and a new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	user := &models.User{
		Username: "TestUser1",
		Email:    "test@test.com",
		Password: "testPassword1",
	}

	// Convert the user to JSON
	userJson, _ := json.Marshal(user)

	// Create a new HTTP request with the user JSON
	context.Request = httptest.NewRequest("POST", "/user", bytes.NewBuffer(userJson))
	context.Request.Header.Set("Content-Type", "application/json")

	userController.CreateUser(context)

	assert.Equal(test, 201, context.Writer.Status())

	// Check the results
	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}

// Test_GetUserById_ShouldBeFound tests the GetUserById function
func Test_UpdateUserById_ShouldBeUpdated(test *testing.T) {
	sqlMock := ChangeToMockDb()

	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"ID", "Username", "Email", "Password"})
	expectedRows.AddRow(1, "TestUser1", "test@gmail.com", "testPassword1")

	// Define the expected query for fetching the user
	sqlMock.ExpectQuery("SELECT \\* FROM \"users\" WHERE \"users\".\"id\" = \\$1 ORDER BY \"users\".\"id\" LIMIT \\$2").WithArgs(1, 1).WillReturnRows(expectedRows)

	//begin transaction
	sqlMock.ExpectBegin()
	// boah this is not as easy as I thought
	sqlMock.ExpectExec("UPDATE \"users\" SET \"username\"=\\$1,\"email\"=\\$2,\"address\"=\\$3,\"first_name\"=\\$4,\"last_name\"=\\$5,\"password\"=\\$6,\"created_at\"=\\$7 WHERE \"id\" = \\$8").
		WithArgs("TestUser1", "updatedUser@gmail.com", "", "", "", "testPassword1", AnyTime{}, 1).
		WillReturnResult(sqlmock.NewResult(1, 1))
	//commit transaction
	sqlMock.ExpectCommit()

	//new instance of the controller
	userController := controllers.UserController{}

	//and a new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	user := &models.User{
		Email: "updatedUser@gmail.com",
	}

	// Convert the user to JSON
	userJson, _ := json.Marshal(user)

	// Create a new HTTP request with the user JSON
	context.Request = httptest.NewRequest("PUT", "/user/1", bytes.NewBuffer(userJson))
	context.Request.Header.Set("Content-Type", "application/json")
	//add the id to the context
	context.Params = append(context.Params, gin.Param{Key: "id", Value: "1"})

	userController.UpdateUser(context)

	assert.Equal(test, 200, context.Writer.Status())

	// Check the results
	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}

// Test_GetUserById_ShouldBeFound tests the GetUserById function
func Test_GetUserById_ShouldBeFound(test *testing.T) {
	sqlMock := ChangeToMockDb()

	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"ID", "Username", "Email", "Password"})
	expectedRows.AddRow(1, "TestUser1", "test@mail.com", "testPassword1")

	// Define the expected query
	sqlMock.ExpectQuery("SELECT \\* FROM \"users\" WHERE \"users\".\"id\" = \\$1 ORDER BY \"users\".\"id\" LIMIT \\$2").WithArgs(1, 1).WillReturnRows(expectedRows)

	//new instance of the controller
	userController := controllers.UserController{}

	//and a new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	//add the id to the context
	context.Params = append(context.Params, gin.Param{Key: "id", Value: "1"})

	userController.GetUserById(context)

	assert.Equal(test, 200, context.Writer.Status())

	// Check the results
	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}

// Test_DeleteUserById_ShouldBeDeleted tests the DeleteUserById function
func Test_DeleteUserById_ShouldBeDeleted(test *testing.T) {
	sqlMock := ChangeToMockDb()

	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"ID", "Username", "Email", "Password"})
	expectedRows.AddRow(1, "TestUser1", "test@test.com,", "testPassword1")

	// Define the expected query
	sqlMock.ExpectQuery("SELECT \\* FROM \"users\" WHERE \"users\".\"id\" = \\$1 ORDER BY \"users\".\"id\" LIMIT \\$2").WithArgs(1, 1).WillReturnRows(expectedRows)

	//begin transaction
	sqlMock.ExpectBegin()

	//delete query mock
	sqlMock.ExpectExec("DELETE FROM \"users\" WHERE \"users\".\"id\" = \\$1").WithArgs(1).WillReturnResult(sqlmock.NewResult(1, 1))

	//commit transaction
	sqlMock.ExpectCommit()

	userController := controllers.UserController{}

	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	context.Params = append(context.Params, gin.Param{Key: "id", Value: "1"})

	userController.DeleteUserById(context)

	assert.Equal(test, 200, context.Writer.Status())

	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}
