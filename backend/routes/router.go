package routes

import "github.com/gin-gonic/gin"

/*
* Initializes all routes for the application. This is the only file that should be imported into main.go
* Add all routes to this file
 */
func InitRoutes(r *gin.Engine) {
	userRoutes(r)
}
