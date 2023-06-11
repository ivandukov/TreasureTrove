package services

import (
	"treasuretrove/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

/**
 * Initializes the database connection and migrates the models
 * @return: void
 */
func InitAndConnectDatabase() {
	dsn := "host=localhost user=sabo password=example dbname=ttDB port=5432 sslmode=disable TimeZone=Europe/Berlin"
	dbConnection, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect database")
	}

	db = dbConnection
}

/**
 * Returns the database connection
 * @return: *gorm.DB
 */
func GetDB() *gorm.DB {
	return db
}

/**
 * Migrates the available models. When the database connection is not initialized, a panic will be thrown.
 * @return: void
 */
func MigrateModels() {

	if db == nil {
		panic("Database connection not initialized")
	}

	db.AutoMigrate(
		&models.User{},
		&models.Giveaway{},
		&models.UserGiveaway{},
		&models.Category{},
		&models.Comment{},
	)
}
