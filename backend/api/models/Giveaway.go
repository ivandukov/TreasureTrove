package models

import "time"

// Giveaway model - represents a giveaway in the database
type Giveaway struct {
	ID          uint       `gorm:"primary_key" json:"id"`
	Title       string     `gorm:"size:255;not null" validate:"required,min=3,max=255" json:"title"`
	Description string     `gorm:"size:255" validate:"required,min=3,max=9000" json:"description"`
	CreatedAt   time.Time  `gorm:"default:CURRENT_TIMESTAMP" json:"createdAt"`
	Status      string     `gorm:"size:255" json:"status"`
	Location    string     `gorm:"size:255" json:"location"`
	ImgUrl      string     `gorm:"size:255" json:"imgUrl"`
	User        []User     `gorm:"many2many:user_giveaways;" validate:"required" json:"user"`
	Categories  []Category `gorm:"many2many:giveaway_categories;" validate:"required" json:"categories"`
}
