package models

import "time"

// Category model - represents a category of giveaways in the database
type Category struct {
	ID        uint      `gorm:"primary_key"`
	Name      string    `gorm:"size:255;not null;unique"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}
