package seed

import "gorm.io/gorm"

type Seed struct {
	Name                   string
	Run                    func(*gorm.DB) error
	HasAlreadyBeenExecuted func(db *gorm.DB) bool
}
