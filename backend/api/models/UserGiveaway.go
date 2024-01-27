package models

// UserGiveaway pivot table
type UserGiveaway struct {
	ID         uint   `gorm:"primary_key"`
	UserID     uint   `gorm:"primary_key"`
	GiveawayID uint   `gorm:"primary_key"`
	Variant    string `gorm:"size:255"`
}
