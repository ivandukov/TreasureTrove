package routes

import (
	"github.com/gin-gonic/gin"
	"treasuretrove/api/controllers"
)

// InitializeUserRoutes initializes the routes for user-related operations.
// It sets up routes for getting all users, creating a user, getting a user by ID,
// updating a user by ID, and deleting a user by ID.
//
// Parameters:
//   - ginEngine: A pointer to a gin.Engine instance.
func InitializeUserRoutes(ginEngine *gin.Engine) {

	userGroup := ginEngine.Group("/user")

	userGroup.GET("/", controllers.UserController{}.GetAllUsers)
	userGroup.POST("/", controllers.UserController{}.CreateUser)
	userGroup.GET("/:id", controllers.UserController{}.GetUserById)
	userGroup.PUT("/:id", controllers.UserController{}.UpdateUserById)
	userGroup.DELETE("/:id", controllers.UserController{}.DeleteUserById)
}
