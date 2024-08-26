package seeds

import (
	"apps/backend/api/models"

	"gorm.io/gorm"
)

func CreateGiveaway(
	db *gorm.DB,
	category models.Category,
	title string,
	description string,
	postalCode uint,
	location string,
	images []string,
	categoryId uint,
	authorId uint,
) error {

	return db.Create(&models.Giveaway{
		Category:    category,
		Title:       title,
		Description: description,
		PostalCode:  postalCode,
		Location:    location,
		Images:      images,
		CategoryID:  categoryId,
		AuthorID:    authorId,
	}).Error
}
