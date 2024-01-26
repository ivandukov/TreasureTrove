package controllers

import (
	"net/http"
	"treasuretrove/models"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type CommentController struct {}

// GetCommentById retrieves all comments from the database
//
// HTTP-Request: GET comments/
//
// Parameters:
//  - context: The context of the request
func (commentController CommentController) GetAllComments(context *gin.Context) {
	var comments []models.Comment
	database := services.GetDatabase()

	database.Find(&comments)
	context.JSON(http.StatusOK, gin.H{"comments": comments}) // return all categories
}

// GetCommentById retrieves a comment from the database using its ID
//
// HTTP-Request: GET comments/:id
//
// Parameters:
//  - context: The context of the request
func (commentController CommentController) GetCommentById(context *gin.Context) {
	var comment models.Comment
	database := services.GetDatabase()
	commentId := context.Param("id") // get Comment-ID from request

	if commentId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	queryResult := database.First(&comment, commentId)
	if queryResult.Error != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"comment": comment})
}

// GetCommentsByUsername retrieves all comments of a specific user using the username
//
// HTTP-Request: GET comments/:username
//
// Parameters:
//  - context: The context of the request
func (commentController CommentController) GetCommentsByUsername(context *gin.Context) {
	
	var comments []models.Comment
	database := services.GetDatabase()
	username := context.Param("username") // get Username from request
	if username == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No username provided"})
		return
	}

	queryResult := database.Where("username = ?", username).Find(&comments)
	if queryResult.Error != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"comments": comments})
}

// GetCommentsByUsername retrieves all comments on a specific giveaway
//
// HTTP-Request: GET comments/:username
//
// Parameters:
//  - context: The context of the request
func (commentController CommentController) GetCommentsByGiveawayId(context *gin.Context) {
	var comments []models.Comment
	database := services.GetDatabase()
	giveawayId := context.Param("giveawayId")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No username provided"})
		return
	}

	queryResult := database.Where("giveaway_id = ?", giveawayId).Find(&comments)
	
	if queryResult.Error != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
	}
	
	context.JSON(http.StatusOK, gin.H{"comments": comments})
}

// CreateComment creates a new comment in the database
// 
// HTTP-Request: POST comments/
//
// Parameters:
//  - context: The context of the request
func (commentController CommentController) CreateComment(context *gin.Context) {
	var newComment models.Comment
	database := services.GetDatabase()
	validator := validator.New()

	context.BindJSON(&newComment)

	validationErr := validator.Struct(newComment)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	queryResult := database.Create(&newComment)

	if queryResult.Error != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": queryResult.Error.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"comment": newComment})

}

// UpdateCommentById updates an existing comment in the database using its id
//
// HTTP-Request: PUT comments/:id
//
// Parameters:
//  - context: The context of the request
func (commentController CommentController) UpdateCommentById(context *gin.Context) {
	
	var comment models.Comment
	database := services.GetDatabase()
	categoryId := context.Param("id")

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&comment, categoryId).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
		return
	}

	context.BindJSON(&comment)

	err = database.Save(&comment).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"comment": comment})
}

// DeleteCommentById deletes an existing comment in the database using its ids
//
// HTTP-Request: DELETE comment/:id
//
// Parameters:
//  - context: The context of the request
func (commentController CommentController) DeleteCommentById(context *gin.Context) {
	var comment models.Comment
	database := services.GetDatabase()
	commentId := context.Param("id")

	if commentId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := database.First(&comment, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
		return
	}

	err = database.Delete(&comment).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Comment deleted"})
}