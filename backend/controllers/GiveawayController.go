package controllers

import (
	"net/http"
	"treasuretrove/models"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type GiveawayController struct {}

// GetAllGivaways retrieves all giveaways and returns them as a JSON-Object
//
// HTTP-Request: GET giveaway/
//
// Parameters:
//  - context: The context of the request
func (giveawaycontroller GiveawayController) GetAllGiveaways(context *gin.Context) {
	
	var giveaways []models.Giveaway
	database := services.GetDatabase()

	database.Find(&giveaways) // get all giveaways from database
	context.JSON(http.StatusOK, gin.H{"giveaways": giveaways}) // return all giveaways
}

func (giveawaycontroller GiveawayController) GetAllGiveawaysByUsername(context *gin.Context) {
	
}

// CreateGiveaway Creates a new giveaway
//
// HTTP-Request: POST givaway/
//
// Parameters:
//  - context: The context of the request
func (giveawaycontroller GiveawayController) CreateGiveaway(context *gin.Context) {
	
	var giveaway models.Giveaway
	database := services.GetDatabase()
	validator := validator.New()

	context.BindJSON(&giveaway)

	validationErr := validator.Struct(giveaway)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	dbErr := database.Create(&giveaway).Error

	if dbErr != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": dbErr.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": giveaway})
}

// GetGiveawayById searches the database for giveaway by its id
//
// HTTP-Request: GET giveaway/:id
//
// Parameters:
//  - context: The context of the request
func (giveawaycontroller GiveawayController) GetGiveawayById(context *gin.Context) {

	var giveaway models.Giveaway
	database := services.GetDatabase() // connect with database
	giveawayId := context.Param("id") // get giveaway-id from the request

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&giveaway, context.Param("id")).Error

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
//  - context: The context of the request
func (giveawaycontroller GiveawayController) UpdateGiveawayById(context *gin.Context) {

	var giveaway models.Giveaway
	database := services.GetDatabase()
	giveawayId := context.Param("id")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&giveaway, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	context.BindJSON(&giveaway)

	err = database.Save(&giveaway).Error

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
func (giveawaycontroller GiveawayController) DeleteGiveawayById(context *gin.Context) {

	var giveaway models.Giveaway
	database := services.GetDatabase()
	giveawayId := context.Param("id")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&giveaway, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	err = database.Delete(&giveaway).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Giveaway deleted"})
}