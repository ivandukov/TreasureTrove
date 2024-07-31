package models

import (
	"gorm.io/gorm"
)

type Request struct {
	gorm.Model
	AuthorID    uint     `gorm:"not null;unique" validate:"required" json:"authorID"`
	Category    Category `gorm:"not null" validate:"required" json:"category"`
	Title       string   `gorm:"size:255;not null" validate:"required,min=3,max=40" json:"title"`
	Description string   `gorm:"size:255;not null" validate:"required,min=3,max=250" json:"description"`
	Images      []string `gorm:"not null" validate:"required" json:"images"`
}
