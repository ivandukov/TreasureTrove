package seeds

import (
	"apps/backend/api/models"

	"gorm.io/gorm"
)

func CreateCategory(db *gorm.DB, name string) error {
	return db.Create(&models.Category{
		Name: name,
	}).Error
}
