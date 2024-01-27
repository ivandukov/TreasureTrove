package routes

import (
	"github.com/gin-gonic/gin"
	"treasuretrove/api/controllers"
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
	categoryGroup.GET("/:id", controllers.CategoryController{}.DeleteCategoryById)
	categoryGroup.GET("/name/:name", controllers.CategoryController{}.DeleteCategoryByUsername)

	categoryGroup.POST("/", controllers.CategoryController{}.CreateCategory)

	categoryGroup.PUT("/:id", controllers.CategoryController{}.UpdateCategoryById)
	categoryGroup.PUT("/name/:name", controllers.CategoryController{}.UpdateCategoryByName)

	categoryGroup.DELETE("/:id", controllers.CategoryController{}.DeleteCategoryById)
	categoryGroup.DELETE("/name/:name", controllers.CategoryController{}.DeleteCategoryByUsername)
}
