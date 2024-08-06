package models

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

// See also
//   - https://stackoverflow.com/a/78251861
//   - https://gorm.io/docs/data_types.html#Implements-Customized-Data-Type
//   - https://github.com/go-gorm/gorm/issues/4498#issuecomment-874659411
type Giveaway struct {
	gorm.Model
	AuthorID    uint
	CategoryID  uint
	Category    Category       `gorm:"not null" validate:"required" json:"category"`
	Title       string         `gorm:"size:255;not null" validate:"required,min=3,max=40" json:"title"`
	Description string         `gorm:"size:255;not null" validate:"required,min=3,max=250" json:"description"`
	Location    string         `gorm:"size:255;not null" validate:"required" json:"location"`
	Images      pq.StringArray `gorm:"type:text[];not null" validate:"required" json:"images"`
}
