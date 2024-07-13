package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"net/http"
	"treasuretrove/api/models"
	"treasuretrove/api/services/database"
)

type CommentController struct{}

// GetAllComments retrieves all comments from the database
//
// HTTP-Request: GET comments/
//
// Parameters:
//   - context: The context of the request
func (commentController CommentController) GetAllComments(context *gin.Context) {
	var comments []models.Comment
	db := database.GetDatabase()

	db.Find(&comments)
	context.JSON(http.StatusOK, gin.H{"comments": comments}) // return all categories
}

// GetCommentById retrieves a comment from the database using its ID
//
// HTTP-Request: GET comments/:id
//
// Parameters:
//   - context: The context of the request
func (commentController CommentController) GetCommentById(context *gin.Context) {
	var comment models.Comment
	db := database.GetDatabase()
	commentId := context.Param("id") // get Comment-ID from request

	if commentId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	queryResult := db.First(&comment, commentId)
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
//   - context: The context of the request
func (commentController CommentController) GetCommentsByUsername(context *gin.Context) {

	var comments []models.Comment
	db := database.GetDatabase()
	username := context.Param("username") // get Username from request
	if username == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No username provided"})
		return
	}

	queryResult := db.Where("username = ?", username).Find(&comments)
	if queryResult.Error != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"comments": comments})
}

// GetCommentsByGiveawayId retrieves all comments on a specific giveaway
//
// HTTP-Request: GET comments/:username
//
// Parameters:
//   - context: The context of the request
func (commentController CommentController) GetCommentsByGiveawayId(context *gin.Context) {
	var comments []models.Comment
	db := database.GetDatabase()
	giveawayId := context.Param("giveawayId")

	if giveawayId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No username provided"})
		return
	}

	queryResult := db.Where("giveaway_id = ?", giveawayId).Find(&comments)

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
//   - context: The context of the request
func (commentController CommentController) CreateComment(context *gin.Context) {
	var newComment models.Comment
	db := database.GetDatabase()
	validate := validator.New()

	bindErr := context.BindJSON(&newComment)

	if bindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": bindErr.Error()})
		return
	}

	validationErr := validate.Struct(newComment)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	queryResult := db.Create(&newComment)

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
//   - context: The context of the request
func (commentController CommentController) UpdateCommentById(context *gin.Context) {

	var comment models.Comment
	db := database.GetDatabase()
	categoryId := context.Param("id")

	if categoryId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&comment, categoryId).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
		return
	}

	bindErr := context.BindJSON(&comment)

	if bindErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = db.Save(&comment).Error

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
//   - context: The context of the request
func (commentController CommentController) DeleteCommentById(context *gin.Context) {
	var comment models.Comment
	db := database.GetDatabase()
	commentId := context.Param("id")

	if commentId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	err := db.First(&comment, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "Comment not found"})
		return
	}

	err = db.Delete(&comment).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Comment deleted"})
}
