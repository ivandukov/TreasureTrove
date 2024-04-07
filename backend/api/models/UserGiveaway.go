package models

// UserGiveaway model - represents the relationship between a user and a giveaway
type UserGiveaway struct {
	ID         uint `gorm:"primary_key"`
	UserID     uint
	GiveawayID uint
	Variant    string `gorm:"size:255"`
}
