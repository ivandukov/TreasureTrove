package models

type Category struct {
	ID        uint   `gorm:"primary_key"`
	name      string `gorm:"size:255;not null;unique"`
	create_at string `gorm:"default:CURRENT_TIMESTAMP"`
}
