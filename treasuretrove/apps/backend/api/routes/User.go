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
	userGroup.POST("/", userController.CreateUser)
	userGroup.GET("/:id", userController.GetUserById)
	userGroup.PUT("/:id", userController.UpdateUser)
	userGroup.DELETE("/:id", userController.DeleteUserById)
}
