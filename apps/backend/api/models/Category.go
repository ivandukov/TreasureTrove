package models

import (
	"gorm.io/gorm"
)

type Category struct {
	gorm.Model
	Name string `gorm:"not null" validate:"required" json:"name"`
}
