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
	categoryGroup.GET("/:id", controllers.CategoryController{}.GetCategoryById)
	categoryGroup.GET("/:name", controllers.CategoryController{}.GetCategoryByName)
	categoryGroup.GET("/:id/giveaways", controllers.CategoryController{}.GetAllGiveawaysByCategoryId)
	categoryGroup.GET("/:id/requests", controllers.CategoryController{}.GetAllRequestsByCategoryId)
	categoryGroup.GET("/:name/giveaways", controllers.CategoryController{}.GetAllGiveawaysByCategoryName)
	categoryGroup.GET("/:name/requests", controllers.CategoryController{}.GetAllRequestsByCategoryName)

	categoryGroup.POST("/", controllers.CategoryController{}.CreateCategory)

	categoryGroup.PUT("/:id", controllers.CategoryController{}.UpdateCategoryById)
	categoryGroup.PUT("/:name", controllers.CategoryController{}.UpdateCategoryByName)

	categoryGroup.DELETE("/:id", controllers.CategoryController{}.DeleteCategoryById)
	categoryGroup.DELETE("/:name", controllers.CategoryController{}.DeleteCategoryByName)
}
