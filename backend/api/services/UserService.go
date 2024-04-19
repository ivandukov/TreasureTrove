package services

import (
	"treasuretrove/api/models"
	"treasuretrove/api/services/db"
)

type UserService struct{}

// GetAllUsers retrieves all users and returns them as a JSON-Object
func (userService UserService) GetAllUsers() (users []models.User) {
	database := db.GetDatabase()

	var allUsers []models.User
	database.Find(&allUsers)

	return users
}
