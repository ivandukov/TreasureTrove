package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"net/http"
	"treasuretrove/api/models"
	"treasuretrove/api/services/db"
)

type CategoryController struct{}

// GetAllCategories retrieves all Categories and returns them as a JSON-Object
//
// HTTP-Request: GET category/
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) GetAllCategories(context *gin.Context) {

	var categories []models.Category
	database := db.GetDatabase()

	database.Find(&categories)
	context.JSON(http.StatusOK, gin.H{"categories": categories}) // return all categories
}

// GetCategoryById retrieves a category by its id
//
// HTTP-Request: GET category/:id
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) GetCategoryById(context *gin.Context) {

	var category models.Category
	database := db.GetDatabase()
	categoryId := context.Param("id") // get category-ID from request

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&category, categoryId).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"category": category})
}

// GetCategoryByName retrieves a category by its name
//
// HTTP-Request: GET category/name/:name
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) GetCategoryByName(context *gin.Context) {

	var category models.Category
	database := db.GetDatabase()
	categoryName := context.Param("name") // get category-Name from request

	if categoryName == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No category-name provided"})
		return
	}

	err := database.First(&category, categoryName).Error
	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"category": category})
}

// CreateCategory creates a new category
//
// HTTP-Request: POST category/
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) CreateCategory(context *gin.Context) {

	var newCategory models.Category
	database := db.GetDatabase()
	validate := validator.New()

	bindErr := context.BindJSON(&newCategory)
	if bindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": bindErr.Error()})
		return
	}

	validationErr := validate.Struct(newCategory)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	err := database.Create(&newCategory).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusCreated, gin.H{"category": newCategory})
}

// UpdateCategoryById updates an existing category by its id
//
// HTTP-Request: PUT category/:id
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) UpdateCategoryById(context *gin.Context) {

	var category models.Category
	database := db.GetDatabase()
	categoryId := context.Param("id")

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&category, categoryId).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	bindErr := context.BindJSON(&category)
	if bindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": bindErr.Error()})
		return
	}

	err = database.Save(&category).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"category": category})
}

// UpdateCategoryByName updates an existing category by its name
//
// HTTP-Request: PUT category/name/:name
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) UpdateCategoryByName(context *gin.Context) {

	var category models.Category
	database := db.GetDatabase()
	categoryName := context.Param("name")

	if categoryName == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No category-name provided"})
		return
	}

	err := database.First(&category, categoryName).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	bindErr := context.BindJSON(&category)

	if bindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = database.Save(&category).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"category": category})
}

// DeleteCategoryById deletes an existing category from database using its ID
//
// HTTP-Request: DELETE category/:id
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) DeleteCategoryById(context *gin.Context) {
	var category models.Category
	database := db.GetDatabase()
	categoryId := context.Param("id")

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&category, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	err = database.Delete(&category).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Category deleted"})
}

// DeleteCategoryByUsername updates an existing category by its name
//
// HTTP-Request: PUT category/:name
//
// Parameters:
//   - context: The context of the request
func (categoryController CategoryController) DeleteCategoryByUsername(context *gin.Context) {
	var category models.Category
	database := db.GetDatabase()
	categoryName := context.Param("name")

	if categoryName == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No name provided"})
		return
	}

	err := database.First(&category, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	err = database.Delete(&category).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Category deleted"})
}
