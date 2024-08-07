package seeds

import (
	"apps/backend/api/models"

	"gorm.io/gorm"
)

func CreateUser(
	db *gorm.DB,
	username string,
	displayname string,
	email string,
	password string,
) error {
	return db.Create(&models.User{
		Username:    username,
		Displayname: displayname,
		Email:       email,
		Password:    password,
	}).Error
}
