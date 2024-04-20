package test

import (
	"github.com/DATA-DOG/go-sqlmock"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
	"testing"
	"treasuretrove/api/services/database"
)

func TestMain(main *testing.M) {
	gin.SetMode(gin.TestMode)
	exitCode := main.Run()
	os.Exit(exitCode)
}

// ChangeToMockDb changes the database connection to a mock database.
func ChangeToMockDb() sqlmock.Sqlmock {
	// sqlMock database
	db, sqlMock, err := sqlmock.New()

	if err != nil {
		panic("an error '%s' was not expected when opening a stub database connection")
	}

	dialector := postgres.New(postgres.Config{
		Conn:       db,
		DriverName: "postgres",
	})
	mockDb, _ := gorm.Open(dialector, &gorm.Config{})
	database.SetDatabase(mockDb)

	return sqlMock
}
