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
