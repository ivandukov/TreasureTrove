package models

type Comment struct {
	ID         uint     `gorm:"primary_key"`
	UserID     uint     `gorm:"column:user_id" validate:"required"`
	User       User     `gorm:"foreignkey:UserID"`
	GiveawayID uint     `gorm:"column:giveaway_id" validate:"required"`
	Giveaway   Giveaway `gorm:"foreignkey:GiveawayID"`
	Content    string   `gorm:"size:1024"`
	CreatedAt  string   `gorm:"default:CURRENT_TIMESTAMP"`
}
