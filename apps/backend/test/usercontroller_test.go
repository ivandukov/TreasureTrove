package test

import (
	"apps/backend/api/controllers"
	"apps/backend/api/models"
	"bytes"
	"encoding/json"
	"net/http/httptest"
	"regexp"
	"strconv"
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
	expectedRows := sqlmock.NewRows([]string{
		"Username",
		"Displayname",
		"Email",
		"Password",
		"ProfilePicture",
	})

	expectedRows.AddRow(
		fake.Internet().User(),
		fake.Internet().User(),
		fake.Internet().Email(),
		fake.Internet().Password(),
		fake.Internet().URL(),
	)

	// Define the expected query
	sqlMock.ExpectQuery(regexp.QuoteMeta(`SELECT * FROM "users"`)).WillReturnRows(expectedRows)

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
	expectedRows := sqlmock.NewRows([]string{
		"ID",
		"Username",
		"Displayname",
		"Email",
		"Password",
		"ProfilePicture",
	})

	userId := fake.UInt()
	expectedRows.AddRow(
		userId,
		fake.Internet().User(),
		fake.Internet().User(),
		fake.Internet().Email(),
		fake.Internet().Password(),
		fake.Internet().URL(),
	)

	sqlMock.
		ExpectQuery(
			regexp.QuoteMeta(`
				SELECT * FROM "users" 
				WHERE "users"."id" = $1 AND "users"."deleted_at" IS NULL 
				ORDER BY "users"."id" LIMIT $2
			`)).
		WithArgs(userId, 1).
		WillReturnRows(expectedRows)

	// new instance of the controller
	userController := controllers.UserController{}

	// new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	// add the id to the context
	context.Params = append(context.Params, gin.Param{Key: "id", Value: strconv.Itoa(int(userId))})

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
		ExpectQuery(regexp.QuoteMeta(`INSERT INTO "users"`)).
		WillReturnRows(sqlmock.NewRows([]string{"ID", "created_at"}).AddRow(1, time.Now()))

	// transaction commit
	sqlMock.ExpectCommit()

	// new instance of the controller
	userController := controllers.UserController{}

	// new test complex
	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	user := &models.User{
		Username:       fake.Internet().User(),
		Displayname:    fake.Internet().User(),
		Email:          fake.Internet().Email(),
		Password:       fake.Internet().Password(),
		ProfilePicture: fake.Internet().URL(),
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
// This only tests change of the user's E-Mail adress
func Test_UpdateUserById_ShouldBeUpdated(test *testing.T) {
	sqlMock := ChangeToMockDb()
	fake := faker.New()

	expectedRows := sqlmock.NewRows([]string{
		"ID",
		"created_at",
		"updated_at",
		"deleted_at",
		"Username",
		"Displayname",
		"Email",
		"Password",
		"ProfilePicture",
	})

	userId := fake.UInt()
	userName := fake.Internet().User()
	userDisplayName := fake.Internet().User()
	userMail := fake.Internet().Email()
	userPass := fake.Internet().Password()
	userProfilePic := fake.Internet().URL()
	updatedMail := fake.Internet().Email()

	expectedRows.AddRow(
		userId,
		time.Now(),
		time.Now(),
		nil,
		userName,
		userDisplayName,
		userMail,
		userPass,
		userProfilePic,
	)

	// Define the expected query for fetching the user
	sqlMock.
		ExpectQuery(
			regexp.QuoteMeta(`
				SELECT * FROM "users"
				WHERE "users"."id" = $1 AND "users"."deleted_at" IS NULL
				ORDER BY "users"."id" LIMIT $2
			`)).
		WithArgs(userId, 1).
		WillReturnRows(expectedRows)

	// begin transaction
	sqlMock.ExpectBegin()

	// See https://pkg.go.dev/github.com/DATA-DOG/go-sqlmock#readme-matching-arguments-like-time-time
	sqlMock.
		ExpectExec(
			regexp.QuoteMeta(`
				UPDATE "users"
				SET "created_at"=$1,
					"updated_at"=$2,
					"deleted_at"=$3,
					"username"=$4,
					"displayname"=$5,
					"email"=$6,
					"password"=$7,
					"profile_picture"=$8
				WHERE "users"."deleted_at" IS NULL AND "id"=$9
			`)).
		WithArgs(
			AnyTime{},
			AnyTime{},
			nil,
			userName,
			userDisplayName,
			updatedMail,
			userPass,
			userId,
			userProfilePic,
		).
		WillReturnResult(sqlmock.NewResult(1, 1))

	// commit transaction
	sqlMock.ExpectCommit()

	userController := controllers.UserController{}

	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	user := &models.User{
		Email: updatedMail,
	}

	// Convert the user to JSON
	userJson, _ := json.Marshal(user)

	// Create a new HTTP request with the user JSON
	context.Request = httptest.NewRequest(
		"PUT",
		"/user/"+strconv.Itoa(int(userId)),
		bytes.NewBuffer(userJson),
	)

	context.Request.Header.Set("Content-Type", "application/json")

	context.Params = append(context.Params, gin.Param{Key: "id", Value: strconv.Itoa(int(userId))})

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
	expectedRows := sqlmock.NewRows([]string{
		"ID",
		"Username",
		"Displayname",
		"Email",
		"Password",
		"ProfilePicture",
	})

	userId := fake.UInt()
	expectedRows.AddRow(
		userId,
		fake.Internet().User(),
		fake.Internet().User(),
		fake.Internet().Email(),
		fake.Internet().Password(),
	)

	sqlMock.
		ExpectQuery(
			regexp.QuoteMeta(`
				SELECT * FROM "users" 
				WHERE "users"."id" = $1 AND "users"."deleted_at" IS NULL 
				ORDER BY "users"."id" LIMIT $2
			`)).
		WithArgs(userId, 1).
		WillReturnRows(expectedRows)

	sqlMock.ExpectBegin()

	sqlMock.
		ExpectExec(regexp.QuoteMeta(`DELETE FROM "users" WHERE "users"."id" = $1`)).
		WithArgs(userId).
		WillReturnResult(sqlmock.NewResult(1, 1))

	sqlMock.ExpectCommit()

	userController := controllers.UserController{}

	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	context.Params = append(context.Params, gin.Param{Key: "id", Value: strconv.Itoa(int(userId))})

	userController.DeleteUserById(context)

	assert.Equal(test, 200, context.Writer.Status())

	if expectationErr := sqlMock.ExpectationsWereMet(); expectationErr != nil {
		test.Fatalf("mock expectations were not met: %v", expectationErr)
	}
}
