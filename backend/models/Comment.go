package models

type Comment struct {
	ID         uint   `gorm:"primary_key"`
	UserID     uint   `gorm:"primary_key"`
	GiveawayID uint   `gorm:"primary_key"`
	content    string `gorm:"size:1024"`
	create_at  string `gorm:"default:CURRENT_TIMESTAMP"`
}
