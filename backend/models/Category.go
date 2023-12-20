package models

type Category struct {
	ID        uint   `gorm:"primary_key"`
	Name      string `gorm:"size:255;not null;unique"`
	Created_at string `gorm:"default:CURRENT_TIMESTAMP"`
}
