package routes

import (
	"apps/backend/api/controllers"
	"github.com/gin-gonic/gin"
)

// InitializeCommentRoutes initializes the routes for comment-related operations.
// Here, the paths get associated with functions for retrieving comments,
// creating comments as well as getting, updating and deleting comments by ID
// (see CommentController.go).
//
// Parameters:
// - r: A pointer to a gin.Engine instance.
func InitializeCommentRoutes(ginEngine *gin.Engine) {

	commentGroup := ginEngine.Group("/comment")

	commentGroup.GET("/", controllers.CommentController{}.GetAllComments)
	commentGroup.GET("/name/:name", controllers.CommentController{}.GetCommentsByUsername)
	commentGroup.GET("/giveaway/:id", controllers.CommentController{}.GetCommentsByGiveawayId)
	commentGroup.GET("/:id", controllers.CommentController{}.GetCommentById)
	commentGroup.POST("/", controllers.CommentController{}.CreateComment)
	commentGroup.PUT("/:id", controllers.CommentController{}.UpdateCommentById)
	commentGroup.DELETE("/:id", controllers.CommentController{}.DeleteCommentById)
}
