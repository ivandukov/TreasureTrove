package controllers

import (
	"net/http"
	"treasuretrove/models"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type GiveawayController struct {}

// Functionname: GetAllGivaways
//
// Description:
//   - retrieves all giveaways and returns them as a JSON-Object
//   - GET giveaways/
//
// Parameters:
//   - context: The context of the request
func (giveawaycontroller GiveawayController) GetAllGiveaways(context *gin.Context) {

	database := services.GetDatabase()
	var giveaways []models.UserGiveaway
	database.Find(&giveaways) // get all giveaways from database
	context.JSON(http.StatusOK, gin.H{"giveaways": giveaways}) // return all giveaways
}

// Functionname: CreateGiveaway
//
// Description:
//   - Creates a new giveaway
//   - POST givaways/
//
// Parameters:
//   - context: The context of the request
func (giveawaycontroller GiveawayController) CreateGiveaway(context *gin.Context) {

	validator := validator.New()
	database := services.GetDatabase()

	var giveaway models.Giveaway

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

// Functionname: GetGiveawayById
//
// Description:
//   - Searches the database for giveaway by its id
//   - GET giveaways/:id
//
// Parameters:
//   - context: The context of the request
func (giveawaycontroller GiveawayController) GetGiveawayById(context *gin.Context) {

	giveawayId := context.Param("id") // get giveaway-id from the request

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	database := services.GetDatabase() // connect with database

	var giveaway models.Giveaway
	err := database.First(&giveaway, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"giveaway": giveaway})
}

// Functionname: UpdateGiveawayById
//
// Description:
//   - updates an existing Giveaway by its ID
//   - PUT giveaways/:id
//
// Parameters:
//   - context: The context of the request
func (giveawaycontroller GiveawayController) UpdateGiveawayById(context *gin.Context) {

	giveawayId := context.Param("id")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	database := services.GetDatabase()

	var giveaway models.Giveaway
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

// Functionname: DeleteGiveawayById
//
// Description:
//   - deletes a Giveaway by its ID
//   - DELETE giveaways/:id
//
// Parameters:
//   - context: The context of the request
func (giveawaycontroller GiveawayController) DeleteGiveawayById(context *gin.Context) {

	giveawayId := context.Param("id")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	database := services.GetDatabase()

	var giveaway models.Giveaway
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
