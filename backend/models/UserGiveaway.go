package models

type UserGiveaway struct {
	ID         uint   `gorm:"primary_key"`
	UserID     uint   `gorm:"primary_key"`
	GiveawayID uint   `gorm:"primary_key"`
	variant    string `gorm:"size:255"`
}
