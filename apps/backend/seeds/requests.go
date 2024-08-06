package seeds

import (
	"apps/backend/api/models"

	"gorm.io/gorm"
)

func CreateRequest(
	db *gorm.DB,
	category models.Category,
	title string,
	description string,
	images []string,
	categoryId uint,
	authorId uint,
) error {

	return db.Create(&models.Request{
		Category:    category,
		Title:       title,
		Description: description,
		Images:      images,
		CategoryID:  categoryId,
		AuthorID:    authorId,
	}).Error
}
