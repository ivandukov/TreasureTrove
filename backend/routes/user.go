package routes

import (
	"treasuretrove/controllers"

	"github.com/gin-gonic/gin"
)

/*
  Initializes all user related routes
*/
func userRoutes(r *gin.Engine) {

	userGroup := r.Group("/user")

	userGroup.GET("/", controllers.UserController{}.List)
	userGroup.POST("/", controllers.UserController{}.Create)
	userGroup.GET("/:id", controllers.UserController{}.Get)
	userGroup.PUT("/:id", controllers.UserController{}.Update)
	userGroup.DELETE("/:id", controllers.UserController{}.Delete)

}
