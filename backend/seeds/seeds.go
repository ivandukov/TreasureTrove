package seeds

import (
	"treasuretrove/models"
	"treasuretrove/seed"

	"gorm.io/gorm"
)

func All() []seed.Seed {
	return []seed.Seed {
		{
			Name: "CreateSofaGiveaway",
			Run: func(database *gorm.DB) error {

				// Create a user for the giveaway
				var users = []models.User {}
				user := models.User{Username: "user1", Email: "user1@mail.com", Password: "1234"}
				if err := CreateUser(database, user.Username, user.Email, user.Password); err != nil {
					return err
				}
				users = append(users, user)
		
				// Create a category for the giveaway
				category := models.Category{ID: 1, Name: "Furniture"}
				if err := CreateCategory(database, category.ID, category.Name); err != nil {
					return err
				}
		
				// Create a giveaway
				return CreateGiveaway(database, "Green Sofa", "Lorem Ipsum", users, category, category.ID)
			},
		},
	}
}
