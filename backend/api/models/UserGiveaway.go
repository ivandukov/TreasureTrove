package models

// UserGiveaway model - represents the relationship between a user and a giveaway
type UserGiveaway struct {
	ID         uint   `gorm:"primary_key"`
	UserID     uint   `gorm:"primary_key"`
	GiveawayID uint   `gorm:"primary_key"`
	Variant    string `gorm:"size:255"`
}
