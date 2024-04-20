package services

import (
	"treasuretrove/api/models"
	"treasuretrove/api/services/database"
)

type UserService struct{}

// GetAllUsers retrieves all users and returns them as a JSON-Object
func (userService UserService) GetAllUsers() (users []models.User) {
	db := database.GetDatabase()

	var allUsers []models.User
	db.Find(&allUsers)

	return users
}
