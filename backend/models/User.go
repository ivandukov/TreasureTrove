package models

import (
	"time"
)

type User struct {
	ID         uint       `gorm:"primary_key"`
	username   string     `gorm:"size:255;not null;unique" validate:"required,min=3,max=255"`
	email      string     `gorm:"size:100;not null;unique" validate:"required,email,min=3,max=100"`
	address    string     `gorm:"size:255"`
	first_name string     `gorm:"size:100"`
	last_name  string     `gorm:"size:100"`
	auth_hash  string     `gorm:"size:255;not null" validate:"required,min=3,max=255"`
	created_at time.Time  `gorm:"default:CURRENT_TIMESTAMP"`
	Giveaways  []Giveaway `gorm:"many2many:user_giveaways;"`
}
