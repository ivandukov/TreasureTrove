package test

import (
	"github.com/DATA-DOG/go-sqlmock"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"net/http/httptest"
	"testing"
	"treasuretrove/api/controllers"
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

func Test_CreateUser_ShouldBeCreated(test *testing.T) {

}
