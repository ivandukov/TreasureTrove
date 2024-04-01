package models

import (
	"time"
)

// User model - represents a user in the database
type User struct {
	ID        uint       `gorm:"primary_key"`
	Username  string     `gorm:"size:255;not null;unique" validate:"required,min=3,max=255"`
	Email     string     `gorm:"size:100;not null;unique" validate:"required,email,min=3,max=100"`
	Address   string     `gorm:"size:255"`
	FirstName string     `gorm:"size:100"`
	LastName  string     `gorm:"size:100"`
	Password  string     `gorm:"size:255;not null" validate:"required,min=3,max=255"`
	CreatedAt time.Time  `gorm:"default:CURRENT_TIMESTAMP"`
	Giveaways []Giveaway `gorm:"many2many:user_giveaways;"`
}
