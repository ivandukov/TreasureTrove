package controllers

import (
	"net/http"
	"treasuretrove/models"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type UserController struct{}

func (u UserController) List(c *gin.Context) {

	db := services.GetDB()

	var users []models.User
	db.Find(&users)

	c.JSON(http.StatusOK, gin.H{"users": users})
}

func (u UserController) Create(c *gin.Context) {

	validator := validator.New()
	db := services.GetDB()

	var user models.User
	c.BindJSON(&user)

	err := validator.Struct(user)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	dbErr := db.Create(&user).Error

	if dbErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": dbErr.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": user})
}

func (u UserController) Get(c *gin.Context) {

	id := c.Param("id")

	if id == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	db := services.GetDB()

	var user models.User
	err := db.First(&user, c.Param("id")).Error

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": user})
}

func (u UserController) Update(c *gin.Context) {

	id := c.Param("id")

	if id == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	db := services.GetDB()

	var user models.User
	err := db.First(&user, c.Param("id")).Error

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	c.BindJSON(&user)

	err = db.Save(&user).Error

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": user})
}

func (u UserController) Delete(c *gin.Context) {

	id := c.Param("id")

	if id == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	db := services.GetDB()

	var user models.User
	err := db.First(&user, c.Param("id")).Error

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	err = db.Delete(&user).Error

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": user})
}
