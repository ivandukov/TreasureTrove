package routes

import (
	"treasuretrove/controllers"
	"github.com/gin-gonic/gin"
)

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