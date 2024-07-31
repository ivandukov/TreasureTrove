package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username         string `gorm:"size:20;not null;unique" validate:"required,min=3,max=20" json:"username"`
	Displayname      string `gorm:"size:20;not null;" validate:"required,min=3,max=20" json:"displayname"`
	Email            string `gorm:"size:40;not null; unique" validate:"required,email,min=3,max=40" json:"email"`
	Password         string `gorm:"size:255;not null" validate:"required,min=3,max=255" json:"password"`
	CreatedGiveaways []Giveaway
	SavedGiveaways   []Giveaway
	CreatedRequests  []Request
	SavedRequests    []Request
}
