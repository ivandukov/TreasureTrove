package tests

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"
	"treasuretrove/controllers"
	"treasuretrove/models"
	"treasuretrove/seeds"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"gorm.io/gorm"
)

func SetUp() {	
	services.ConnectToDatabase()
	services.MigrateModels()
	// Run all seeds
	for _, seed := range seeds.All() {
		if err := seed.Run(services.GetDatabase()); err != nil {
			log.Fatalf("Running seed '%s', failed with error: %s", seed.Name, err)
		}
	}
}

func TearDown() {

	var database *gorm.DB = services.GetDatabase()

	sqlDB, err := database.DB()
	if err != nil {
		log.Fatal(err)
	}
	
	// Drop all tables
	database.Migrator().DropTable(&models.User{}, &models.Giveaway{}, 
								  &models.UserGiveaway{}, &models.Category{}, 
								  &models.Comment{})

	// Close the database Connection
	err = sqlDB.Close()
	if err != nil {
		log.Fatal(err)
	}
}


func TestGetAllGiveaways(test *testing.T) {
	SetUp()
	// Create a new instance of GiveawayController
	var giveawayController controllers.GiveawayController
	context, _ := gin.CreateTestContext(httptest.NewRecorder())
	giveawayController.GetAllGiveaways(context)
	assert.Equal(test, http.StatusOK, context.Writer.Status())
	TearDown()
}

func TestCreateGiveaway(test *testing.T) {

	SetUp()

	var database *gorm.DB = services.GetDatabase()

	// Create a new instance of GiveawayController
	var giveawayController controllers.GiveawayController


	// Get the first user and category from the seed data
	var user models.User
	var category models.Category
	database.First(&user)
	database.First(&category)

	var giveaway = models.Giveaway { 
		Title: "Red Pillow", 
		Description: "This is a test description", 
		User: []models.User{user},
		CategoryID: category.ID,
	}

	// TODO: Decide between transaction rollback and database drop
	// transaction := services.GetDatabase().Begin()

	context, _ := gin.CreateTestContext(httptest.NewRecorder())

	// Marshal the giveaway data into JSON
	jsonValue, _ := json.Marshal(giveaway)

	// Create a new HTTP request with the POST method and the JSON body
	request, _ := http.NewRequest("POST", "/giveaway", bytes.NewBuffer(jsonValue))
	
	// Set the body of the request
	context.Request = request 
	
	giveawayController.CreateGiveaway(context)

	assert.Equal(test, http.StatusOK, context.Writer.Status())
	
	// transaction.Rollback()

	TearDown()
}

func TestGetGiveawayById(test *testing.T) {

}

func TestUpdateGiveawayById(test *testing.T) {

}

func TestDeleteGiveawayById(test *testing.T) {

}