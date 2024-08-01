package routes

import (
	"apps/backend/api/controllers"
	"apps/backend/api/services"

	"github.com/gin-gonic/gin"
)

// InitializeUserRoutes initializes the routes for user-related operations.
// It sets up routes for getting all users, creating a user, getting a user by ID,
// updating a user by ID, and deleting a user by ID.
//
// Parameters:
//   - ginEngine: A pointer to a gin.Engine instance.
func InitializeUserRoutes(ginEngine *gin.Engine) {

	userService := services.UserService{}
	userController := controllers.UserController{IUserService: userService}

	userGroup := ginEngine.Group("/user")

	userGroup.GET("/", userController.GetAllUsers)
	userGroup.GET("/:id", userController.GetUserById)
	userGroup.GET("/:id/giveaways/created", userController.GetAllCreatedGiveawaysByUserId)
	userGroup.GET("/:id/giveaways/saved", userController.GetAllSavedGiveawaysByUserId)
	userGroup.GET("/:id/requests/created", userController.GetAllCreatedRequestsByUserId)
	userGroup.GET("/:id/requests/saved", userController.GetAllSavedRequestsByUserId)

	userGroup.POST("/", userController.CreateUser)
	userGroup.PUT("/:id", userController.UpdateUserById)
	userGroup.DELETE("/:id", userController.DeleteUserById)
}
