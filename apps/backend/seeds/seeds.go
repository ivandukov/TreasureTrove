package seeds

import (
	"apps/backend/api/models"
	"apps/backend/seed"

	"github.com/jaswdr/faker"
	"gorm.io/gorm"
)

func All() []seed.Seed {

	fake := faker.New()

	return []seed.Seed{
		{
			Name: "SeedDatabaseWithUsers",
			HasAlreadyBeenExecuted: func(db *gorm.DB) bool {
				var count int64
				err := db.Model(&models.User{}).Count(&count).Error
				if err != nil {
					return false
				}
				return count > 0
			},
			Run: func(db *gorm.DB) error {
				for i := 0; i < 100; i++ {
					err := CreateUser(
						db,
						fake.Internet().User(),
						fake.Internet().User(),
						fake.Internet().Email(),
						fake.Internet().Password(),
					)
					if err != nil {
						return err
					}
				}
				return nil
			},
		},
		{
			Name: "SeedDatabaseWithCategories",
			HasAlreadyBeenExecuted: func(db *gorm.DB) bool {
				var count int64
				err := db.Model(&models.Category{}).Count(&count).Error
				if err != nil {
					return false
				}
				return count > 0
			},
			Run: func(db *gorm.DB) error {
				for i := 0; i < 7; i++ {
					err := CreateCategory(db, fake.Lorem().Word())
					if err != nil {
						return err
					}
				}
				return nil
			},
		},
	}
}
