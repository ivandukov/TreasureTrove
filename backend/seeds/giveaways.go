package seeds

import (
	"treasuretrove/models"
	"gorm.io/gorm"
)

func CreateGiveaway(database *gorm.DB, title string, 
					description string, users []models.User, 
					category models.Category, categoryId uint) error {
						
	return database.Create(&models.Giveaway{Title: title, 
											Description: description,
											User: users,
											Category: category,
											CategoryID: category.ID}).Error
}