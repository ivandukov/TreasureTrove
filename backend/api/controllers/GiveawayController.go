package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"net/http"
	"treasuretrove/api/models"
	"treasuretrove/api/services/database"
)

type GiveawayController struct{}

// GetAllGiveaways retrieves all giveaways and returns them as a JSON-Object
//
// HTTP-Request: GET giveaway/
//
// Parameters:
//   - context: The context of the request
func (giveawayController GiveawayController) GetAllGiveaways(context *gin.Context) {

	var giveaways []models.Giveaway
	db := database.GetDatabase()

	db.Find(&giveaways)                                        // get all giveaways from db
	context.JSON(http.StatusOK, gin.H{"giveaways": giveaways}) // return all giveaways
}

// CreateGiveaway Creates a new giveaway
//
// HTTP-Request: POST giveaway/
//
// Parameters:
//   - context: The context of the request
func (giveawayController GiveawayController) CreateGiveaway(context *gin.Context) {

	var giveaway models.Giveaway
	db := database.GetDatabase()
	validation := validator.New()

	jsonBindErr := context.BindJSON(&giveaway)
	if jsonBindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": jsonBindErr.Error()})
		return
	}

	validationErr := validation.Struct(giveaway)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	var user models.User
	if err := db.First(&user, giveaway.UserId).Error; err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "User not found"})
		return
	}

	// Fetch the existing categories from the database
	var categories []models.Category
	for _, category := range giveaway.Categories {
		var existingCategory models.Category
		//search by id
		if err := db.First(&existingCategory, category.ID).Error; err != nil {
			context.JSON(http.StatusBadRequest, gin.H{"error": "Category not found"})
			return
		}
		categories = append(categories, existingCategory)
	}

	dbErr := db.Create(&giveaway).Error

	//preload the user
	db.Preload("User").First(&giveaway, giveaway.ID)

	if dbErr != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": dbErr.Error()})
		return
	}

	context.JSON(http.StatusCreated, giveaway)
}

// GetGiveawayById searches the database for giveaway by its id
//
// HTTP-Request: GET giveaway/:id
//
// Parameters:
//   - context: The context of the request
func (giveawayController GiveawayController) GetGiveawayById(context *gin.Context) {

	var giveaway models.Giveaway
	db := database.GetDatabase()      // connect with db
	giveawayId := context.Param("id") // get giveaway-id from the request

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&giveaway, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"giveaway": giveaway})
}

// UpdateGiveawayById updates an existing Giveaway by its ID
//
// HTTP-Request: PUT giveaway/:id
//
// Parameters:
//   - context: The context of the request
func (giveawayController GiveawayController) UpdateGiveawayById(context *gin.Context) {

	var giveaway models.Giveaway
	db := database.GetDatabase()
	giveawayId := context.Param("id")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&giveaway, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	jsonBindErr := context.BindJSON(&giveaway)
	if jsonBindErr != nil {
		return
	}

	err = db.Save(&giveaway).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": giveaway})
}

// DeleteGiveawayById deletes a Giveaway by its ID
//
// HTTP-Request: DELETE giveaway/:id
//
// Parameters:
//   - context: The context of the request
func (giveawayController GiveawayController) DeleteGiveawayById(context *gin.Context) {

	var giveaway models.Giveaway
	db := database.GetDatabase()
	giveawayId := context.Param("id")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&giveaway, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	err = db.Delete(&giveaway).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Giveaway deleted"})
}
