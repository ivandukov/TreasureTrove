package controllers

import (
	"apps/backend/api/models"
	"net/http"
	"apps/backend/api/services/database"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
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

	dbErr := db.Create(&giveaway).Error

	if dbErr != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": dbErr.Error()})
		return
	}

	context.JSON(http.StatusCreated, gin.H{"user": giveaway})
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
