package models

import (
	"gorm.io/gorm"
)

type Request struct {
	gorm.Model
	AuthorID    uint
	Category    Category `gorm:"foreignKey:ID;not null" validate:"required" json:"category"`
	Title       string   `gorm:"size:255;not null" validate:"required,min=3,max=40" json:"title"`
	Description string   `gorm:"size:255;not null" validate:"required,min=3,max=250" json:"description"`
	Images      []string `gorm:"type:text[];not null" validate:"required" json:"images"`
}
