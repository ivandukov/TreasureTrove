package services

import (
	"treasuretrove/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// contains the database connection
var database *gorm.DB

 // Functionname: InitAndConnectDatabase
 // 
 // Description: Initializes the database connection using the provided DSN (Data Source Name).
func InitAndConnectDatabase() {
	dsn := "host=localhost user=sabo password=example dbname=ttDB port=5432 sslmode=disable TimeZone=Europe/Berlin"
	dbConnection, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect database")
	}

	database = dbConnection
}

// Functionname: GetDatabase
// 
// Description: Returns the database connection
func GetDatabase() *gorm.DB {
	return database
}

// Functionname: MigrateModels
// 
// Description: Migrates the available models to the connected database. When the database connection is not initialized, 
// a panic will be thrown. 
// The models include User, Giveaway, UserGiveaway, Category, and Comment.
func MigrateModels() {

	// Check if the database connection is initialized
	if database == nil {
		panic("Database connection not initialized")
	}

	// Create tables and their relationships based on the provided model structs
	database.AutoMigrate(
		&models.User{},
		&models.Giveaway{},
		&models.UserGiveaway{},
		&models.Category{},
		&models.Comment{},
	)
}