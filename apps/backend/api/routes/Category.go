package routes

import (
	"apps/backend/api/controllers"

	"github.com/gin-gonic/gin"
)

// InitializeCategoryRoutes initializes the routes for category-related operations.
// Here, the paths get associated with functions for retrieving categories,
// creating categories as well as getting, updating and deleting categories by ID
// (see CategoryController.go).
//
// Parameters:
// - r: A pointer to a gin.Engine instance.
func InitializeCategoryRoutes(ginEngine *gin.Engine) {

	categoryGroup := ginEngine.Group("/category")

	categoryGroup.GET("/", controllers.CategoryController{}.GetAllCategories)

	categoryGroup.GET("/id/:id", controllers.CategoryController{}.GetCategoryById)
	categoryGroup.GET("/id/:id/giveaways", controllers.CategoryController{}.GetAllGiveawaysByCategoryId)
	categoryGroup.GET("/id/:id/requests", controllers.CategoryController{}.GetAllRequestsByCategoryId)

	categoryGroup.GET("/name/:name", controllers.CategoryController{}.GetCategoryByName)
	categoryGroup.GET("/name/:name/giveaways", controllers.CategoryController{}.GetAllGiveawaysByCategoryName)
	categoryGroup.GET("/name/:name/requests", controllers.CategoryController{}.GetAllRequestsByCategoryName)

	categoryGroup.POST("/", controllers.CategoryController{}.CreateCategory)

	categoryGroup.PUT("/id/:id", controllers.CategoryController{}.UpdateCategoryById)
	categoryGroup.PUT("/name/:name", controllers.CategoryController{}.UpdateCategoryByName)

	categoryGroup.DELETE("/id/:id", controllers.CategoryController{}.DeleteCategoryById)
	categoryGroup.DELETE("/name/:name", controllers.CategoryController{}.DeleteCategoryByName)
}
