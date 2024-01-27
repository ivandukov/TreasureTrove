package models

import "time"

type Giveaway struct {
	ID          uint       `gorm:"primary_key"`
	Title       string     `gorm:"size:255;not null" validate:"required,min=3,max=255"`
	Description string     `gorm:"size:255" validate:"required,min=3,max=9000"`
	CreatedAt   time.Time  `gorm:"default:CURRENT_TIMESTAMP"`
	Status      string     `gorm:"size:255"`
	Location    string     `gorm:"size:255"`
	ImgUrl      string     `gorm:"size:255"`
	User        []User     `gorm:"many2many:user_giveaways;" validate:"required"`
	Categories  []Category `gorm:"many2many:giveaway_categories;" validate:"required"`
}
