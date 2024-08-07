package routes

import "github.com/gin-gonic/gin"

// InitRoutes initializes all routes for the application
// This is the only file that should be imported into main.go
//
// Parameters:
//   - ginEngine : main entry point for Gin Framework
func InitRoutes(ginEngine *gin.Engine) {
	InitializeUserRoutes(ginEngine)
	InitializeGiveawayRoutes(ginEngine)
	InitializeCategoryRoutes(ginEngine)
}
