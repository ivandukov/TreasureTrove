package database

import (
	"apps/backend/api/models"
	"apps/backend/seeds"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// contains the database connection
var database *gorm.DB

// ConnectToDatabase initializes the database connection
// using the provided DSN (Data Source Name).
func ConnectToDatabase() {
	connectionString := os.Getenv("DATABASE_URL")

	if connectionString == "" {
		panic("Error getting DATABASE_URL from environment variables")
	}

	databaseConnection, err := gorm.Open(postgres.Open(connectionString), &gorm.Config{})

	if err != nil {
		panic("Failed to connect database")
	}

	database = databaseConnection
}

// GetDatabase returns the database connection
func GetDatabase() *gorm.DB {
	return database
}

// SetDatabase sets the database connection to the provided value
func SetDatabase(newDatabase *gorm.DB) {
	database = newDatabase
}

// MigrateModels migrates the available models to the connected database.
// When the database connection is not initialized, a panic will be thrown.
// The models include User, Giveaway, UserGiveaway, Category, and Comment.
func MigrateModels() {

	// Check if the database connection is initialized
	if database == nil {
		panic("Database connection not initialized")
	}

	// Create tables and their relationships based on the provided model structs
	autoMigrationErr := database.AutoMigrate(
		&models.User{},
		&models.Giveaway{},
		&models.Request{},
		&models.Category{},
	)

	if autoMigrationErr != nil {
		panic("Error migrating models to database")
	}
}

func Seed() {

	for _, seed := range seeds.All() {
		if !seed.HasAlreadyBeenExecuted(database) {
			log.Default().Print("Running Seed:", seed.Name)
			err := seed.Run(database)
			if err != nil {
				log.Fatalf("Error: Seed '%s', failed with error: %s", seed.Name, err)
			}
		}
	}

}
