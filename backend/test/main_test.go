package test

import (
	"database/sql/driver"
	"github.com/DATA-DOG/go-sqlmock"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
	"testing"
	"time"
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

type AnyTime struct{}

// Match satisfies sqlmock.Argument interface -> used in the db mocks
func (a AnyTime) Match(v driver.Value) bool {
	_, ok := v.(time.Time)
	return ok
}
