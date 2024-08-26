package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username         string     `gorm:"size:30;not null;unique" validate:"required,min=3,max=30" json:"username"`
	Displayname      string     `gorm:"size:30;not null;" validate:"required,min=3,max=30" json:"displayname"`
	Email            string     `gorm:"size:40;not null; unique" validate:"required,email,min=3,max=40" json:"email"`
	Password         string     `gorm:"size:255;not null" validate:"required,min=3,max=255" json:"password"`
	ProfilePicture   string     `json:"profilePicture"`
	CreatedGiveaways []Giveaway `gorm:"foreignKey:AuthorID;references:ID" json:"createdGiveaways"`
	SavedGiveaways   []Giveaway `gorm:"many2many:user_giveaways;" json:"savedGiveaways"`
	CreatedRequests  []Request  `gorm:"foreignKey:AuthorID;references:ID" json:"createdRequests"`
	SavedRequests    []Request  `gorm:"many2many:user_requests;" json:"savedRequests"`
	Followers        []User     `gorm:"many2many:user_user;" json:"followers"`
}
