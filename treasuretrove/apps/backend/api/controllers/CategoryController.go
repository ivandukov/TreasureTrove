package controllers

import (
	"apps/backend/api/models"
	"apps/backend/api/services/database"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
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
	db := database.GetDatabase()

	db.Find(&categories)
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
	db := database.GetDatabase()
	categoryId := context.Param("id") // get category-ID from request

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&category, categoryId).Error

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
	db := database.GetDatabase()
	categoryName := context.Param("name") // get category-Name from request

	if categoryName == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No category-name provided"})
		return
	}

	err := db.First(&category, categoryName).Error
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
	db := database.GetDatabase()
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

	err := db.Create(&newCategory).Error

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
	db := database.GetDatabase()
	categoryId := context.Param("id")

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&category, categoryId).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	bindErr := context.BindJSON(&category)
	if bindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": bindErr.Error()})
		return
	}

	err = db.Save(&category).Error

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
	db := database.GetDatabase()
	categoryName := context.Param("name")

	if categoryName == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No category-name provided"})
		return
	}

	err := db.First(&category, categoryName).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	bindErr := context.BindJSON(&category)

	if bindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = db.Save(&category).Error

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
	db := database.GetDatabase()
	categoryId := context.Param("id")

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&category, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	err = db.Delete(&category).Error

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
	db := database.GetDatabase()
	categoryName := context.Param("name")

	if categoryName == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No name provided"})
		return
	}

	err := db.First(&category, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Category not found"})
		return
	}

	err = db.Delete(&category).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Category deleted"})
}
