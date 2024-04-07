package models

type Comment struct {
	ID         uint     `gorm:"primary_key" json:"id"`
	UserID     uint     `gorm:"column:user_id" validate:"required" json:"user_id"`
	User       User     `gorm:"foreignkey:UserID" `
	GiveawayID uint     `gorm:"column:giveaway_id" validate:"required" json:"giveaway_id"`
	Giveaway   Giveaway `gorm:"foreignkey:GiveawayID"`
	Content    string   `gorm:"size:1024" validate:"required" json:"content"`
	CreatedAt  string   `gorm:"default:CURRENT_TIMESTAMP" json:"createdAt"`
}
