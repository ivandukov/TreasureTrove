package models

import "time"

type Giveaway struct {
	ID          uint      `gorm:"primary_key"`
	title       string    `gorm:"size:255;not null"`
	description string    `gorm:"size:255"`
	created_at  time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	status      string    `gorm:"size:255"`
	location    string    `gorm:"size:255"`
	img_url     string    `gorm:"size:255"`
	User        []User    `gorm:"many2many:user_giveaways;"`
	CategoryID  uint
	Category    Category
}
