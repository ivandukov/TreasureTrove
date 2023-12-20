package seeds

import (
	"treasuretrove/models"
	"gorm.io/gorm"
)

func CreateUser(database *gorm.DB, username string, email string, password string) error {
	return database.Create(&models.User{Username: username, 
										Email: email, 
										Password: password}).Error
}