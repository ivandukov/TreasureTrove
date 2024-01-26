package routes

import (
	"treasuretrove/controllers"
	"github.com/gin-gonic/gin"
)

// InitializeGiveawayRoutes initializes the routes for giveaway-related operations.
// Here, the paths get associated with functions for retrieving giveaways,
// creating giveaways as well as getting, updating and deleting giveaways by ID
// (see GiveawayController.go).
//
// Parameters:
// - r: A pointer to a gin.Engine instance.
func InitializeGiveawayRoutes(ginEngine *gin.Engine) {

	giveawayGroup := ginEngine.Group("/giveaway")

	giveawayGroup.GET("/", controllers.GiveawayController{}.GetAllGiveaways)
	giveawayGroup.GET("/:id", controllers.GiveawayController{}.GetGiveawayById)
	giveawayGroup.POST("/", controllers.GiveawayController{}.CreateGiveaway)
	giveawayGroup.PUT("/:id", controllers.GiveawayController{}.UpdateGiveawayById)
	giveawayGroup.DELETE("/:id", controllers.GiveawayController{}.DeleteGiveawayById)
}