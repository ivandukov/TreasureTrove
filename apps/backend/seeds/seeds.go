package seeds

import (
	"apps/backend/api/models"
	"apps/backend/seed"
	"math/rand"

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
				for i := 0; i < 50; i++ {
					err := CreateUser(
						db,
						fake.Person().Name(),
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
				for i := 0; i < 10; i++ {
					err := CreateCategory(db, fake.Lorem().Word())
					if err != nil {
						return err
					}
				}
				return nil
			},
		},
		{
			Name: "SeedDatabaseWithGiveaways",
			HasAlreadyBeenExecuted: func(db *gorm.DB) bool {
				var count int64
				err := db.Model(&models.Giveaway{}).Count(&count).Error
				if err != nil {
					return false
				}
				return count > 0
			},
			Run: func(db *gorm.DB) error {

				for i := 0; i < 25; i++ {
					var randomCategory models.Category
					db.First(&randomCategory, "id = ?", rand.Intn(10)+1)

					var randomUser models.User
					db.First(&randomUser, "id = ?", rand.Intn(50)+1)

					err := CreateGiveaway(
						db,
						randomCategory,
						fake.Lorem().Sentence(rand.Intn(7)+1),
						fake.Lorem().Sentence(rand.Intn(25)+10),
						uint(rand.Intn(99999)+10000),
						fake.Address().City(),
						[]string{
							"https://media.istockphoto.com/id/1325006592/photo/one-closed-cardboard-box.jpg?s=612x612&w=0&k=20&c=cmqs7xjVKxcQq8_8yR5tP3KbVPB6512BqCDrFVd4VL0=",
							"https://previews.123rf.com/images/ahirao/ahirao1605/ahirao160500002/56441569-empty-box.jpg",
							"https://media.istockphoto.com/id/1363734940/photo/three-cardboard-boxes.jpg?s=612x612&w=0&k=20&c=Qj6K1O9O0C3afPCrCGJzR_8MRlxSgpfSs24hvVjxaq0=",
						},
						randomCategory.ID,
						randomUser.ID,
					)
					if err != nil {
						return err
					}
				}

				return nil
			},
		},
		{
			Name: "SeedDatabaseWithRequests",
			HasAlreadyBeenExecuted: func(db *gorm.DB) bool {
				var count int64
				err := db.Model(&models.Request{}).Count(&count).Error
				if err != nil {
					return false
				}
				return count > 0
			},
			Run: func(db *gorm.DB) error {

				var randomCategory models.Category
				db.First(&randomCategory, "id = ?", rand.Intn(10)+1)

				var randomUser models.User
				db.First(&randomUser, "id = ?", rand.Intn(50)+1)

				err := CreateRequest(
					db,
					randomCategory,
					fake.Lorem().Word(),
					fake.Lorem().Sentence(3),
					[]string{
						"https://media.istockphoto.com/id/1325006592/photo/one-closed-cardboard-box.jpg?s=612x612&w=0&k=20&c=cmqs7xjVKxcQq8_8yR5tP3KbVPB6512BqCDrFVd4VL0=",
						"https://previews.123rf.com/images/ahirao/ahirao1605/ahirao160500002/56441569-empty-box.jpg",
						"https://media.istockphoto.com/id/1363734940/photo/three-cardboard-boxes.jpg?s=612x612&w=0&k=20&c=Qj6K1O9O0C3afPCrCGJzR_8MRlxSgpfSs24hvVjxaq0=",
					},
					randomCategory.ID,
					randomUser.ID,
				)
				if err != nil {
					return err
				}

				return nil
			},
		},
	}
}
