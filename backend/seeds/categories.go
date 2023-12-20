package seeds

import (
	"treasuretrove/models"
	"gorm.io/gorm"
)

func CreateCategory(database *gorm.DB, id uint, name string) error {
	return database.Create(&models.Category{ID: id, Name : name}).Error
}