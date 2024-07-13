package models

import (
	"time"
)

// User model - represents a user in the database
type User struct {
	ID        uint       `gorm:"primary_key" json:"id"`
	Username  string     `gorm:"size:255;not null;unique" json:"username"`
	Email     string     `gorm:"size:100;not null;unique" json:"email"`
	Address   string     `gorm:"size:255" json:"address"`
	FirstName string     `gorm:"size:100" json:"firstName"`
	LastName  string     `gorm:"size:100" json:"lastName"`
	Password  string     `gorm:"size:255;not null" json:"-"`
	CreatedAt time.Time  `gorm:"default:CURRENT_TIMESTAMP" json:"createdAt" json:"-"`
	Giveaways []Giveaway `gorm:"foreignKey:UserId" json:"giveaways"`
}
