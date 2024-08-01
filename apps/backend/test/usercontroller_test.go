package test

import (
	"apps/backend/api/controllers"
	"apps/backend/api/models"
	"bytes"
	"encoding/json"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/gin-gonic/gin"
	"github.com/jaswdr/faker/v2"
	"github.com/stretchr/testify/assert"
)

// Test_GetAllUsers_ShouldBeFound tests the GetAllUsers function
func Test_GetAllUsers_ShouldBeFound(test *testing.T) {

	sqlMock := ChangeToMockDb()
	fake := faker.New()

	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"Username", "Displayname", "Email", "Password"})
	expectedRows.AddRow(
		fake.Internet().User(),
		fake.Internet().User(),
		fake.Internet().Email(),
		fake.Internet().Password(),
	)

	// Define the expected query
	sqlMock.ExpectQuery("SELECT \\* FROM \"users\"").WillReturnRows(expectedRows)

	// new instance of the controller
	userController := controllers.UserController{}

	// new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	userController.GetAllUsers(context)

	assert.Equal(test, 200, context.Writer.Status())

	// Check results
	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}

// Test_GetUserById_ShouldBeFound tests the GetUserById function
func Test_GetUserById_ShouldBeFound(test *testing.T) {
	sqlMock := ChangeToMockDb()

	fake := faker.New()

	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"Id", "Username", "Displayname", "Email", "Password"})
	expectedRows.AddRow(
		fake.UInt(),
		fake.Internet().User(),
		fake.Internet().User(),
		fake.Internet().Email(),
		fake.Internet().Password(),
	)

	// Define the expected query
	sqlMock.ExpectQuery("SELECT \\* FROM \"users\" WHERE \"users\".\"id\" = \\$1 AND \"users\".\"deleted_at\" IS NULL ORDER BY \"users\".\"id\" LIMIT \\$2").
		WithArgs(1, 1).
		WillReturnRows(expectedRows)

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

// Test_CreateUser_ShouldBeCreated tests the CreateUser function
func Test_CreateUser_ShouldBeCreated(test *testing.T) {
	sqlMock := ChangeToMockDb()
	fake := faker.New()

	// transaction begin
	sqlMock.ExpectBegin()

	// insert query mock
	sqlMock.
		ExpectQuery("INSERT INTO \"users\"").
		WillReturnRows(sqlmock.NewRows([]string{"ID", "created_at"}).AddRow(1, time.Now()))

	// transaction commit
	sqlMock.ExpectCommit()

	//new instance of the controller
	userController := controllers.UserController{}
	//and a new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	user := &models.User{
		Username: fake.Internet().User(),
		Email:    fake.Internet().Email(),
		Password: fake.Internet().Password(),
	}

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

// Test_UpdateUserById_ShouldBeUpdated tests the UpdateUserById function
func Test_UpdateUserById_ShouldBeUpdated(test *testing.T) {
	sqlMock := ChangeToMockDb()
	fake := faker.New()

	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"Id", "Username", "Displayname", "Email", "Password"})
	expectedRows.AddRow(
		1,
		fake.Internet().User(),
		fake.Internet().User(),
		fake.Internet().Email(),
		fake.Internet().Password(),
	)

	// Define the expected query for fetching the user
	sqlMock.
		ExpectQuery("SELECT \\* FROM \"users\" WHERE \"users\".\"id\" = \\$1 AND \"users\".\"deleted_at\" IS NULL ORDER BY \"users\".\"id\" LIMIT \\$2").
		WithArgs(1, 1).
		WillReturnRows(expectedRows)

	// begin transaction
	sqlMock.ExpectBegin()

	sqlMock.
		ExpectExec("UPDATE \"users\" SET \"username\"=\\$1,\"displayname\"=\\$2,\"email\"=\\$3,\"password\"=\\$4 WHERE \"id\" = \\$5").
		WithArgs(
			fake.Internet().User(),
			fake.Internet().User(),
			fake.Internet().Email(),
			fake.Internet().Password(),
			1,
		).
		WillReturnResult(sqlmock.NewResult(1, 1))

	// commit transaction
	sqlMock.ExpectCommit()

	userController := controllers.UserController{}

	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	user := &models.User{
		Email: fake.Internet().Email(),
	}

	// Convert the user to JSON
	userJson, _ := json.Marshal(user)

	// Create a new HTTP request with the user JSON
	context.Request = httptest.NewRequest("PUT", "/user/1", bytes.NewBuffer(userJson))
	context.Request.Header.Set("Content-Type", "application/json")

	context.Params = append(context.Params, gin.Param{Key: "id", Value: "1"})

	userController.UpdateUserById(context)
	assert.Equal(test, 200, context.Writer.Status())

	// Check the results
	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}

// Test_DeleteUserById_ShouldBeDeleted tests the DeleteUserById function
func Test_DeleteUserById_ShouldBeDeleted(test *testing.T) {
	sqlMock := ChangeToMockDb()

	fake := faker.New()

	// Define the expected rows
	expectedRows := sqlmock.NewRows([]string{"ID", "Username", "Displayname", "Email", "Password"})
	expectedRows.AddRow(
		fake.UInt(),
		fake.Internet().User(),
		fake.Internet().User(),
		fake.Internet().Email(),
		fake.Internet().Password(),
	)

	sqlMock.
		ExpectQuery("SELECT \\* FROM \"users\" WHERE \"users\".\"id\" = \\$1 AND \"users\".\"deleted_at\" IS NULL ORDER BY \"users\".\"id\" LIMIT \\$2").
		WithArgs(1, 1).
		WillReturnRows(expectedRows)

	sqlMock.ExpectBegin()

	sqlMock.
		ExpectExec("DELETE FROM \"users\" WHERE \"users\".\"id\" = \\$1").
		WithArgs(1).
		WillReturnResult(sqlmock.NewResult(1, 1))

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
