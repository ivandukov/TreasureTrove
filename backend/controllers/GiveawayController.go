package controllers

import (
	"net/http"
	"treasuretrove/models"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type GiveawayController struct{}

func (u GiveawayController) List(c *gin.Context) {

	db := services.GetDB()

	var giveaways []models.UserGiveaway
	db.Find(&giveaways)

	c.JSON(http.StatusOK, gin.H{"giveaways": giveaways})
}

func (u GiveawayController) Create(c *gin.Context) {

	validator := validator.New()
	db := services.GetDB()

	var giveaway models.Giveaway

	c.BindJSON(&giveaway)

	validationErr := validator.Struct(giveaway)

	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	dbErr := db.Create(&giveaway).Error

	if dbErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": dbErr.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": giveaway})
}

func (u GiveawayController) Get(c *gin.Context) {

	id := c.Param("id")

	if id == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	db := services.GetDB()

	var giveaway models.Giveaway
	err := db.First(&giveaway, c.Param("id")).Error

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"giveaway": giveaway})
}

func (u GiveawayController) Update(c *gin.Context) {

	id := c.Param("id")

	if id == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	db := services.GetDB()

	var giveaway models.Giveaway
	err := db.First(&giveaway, c.Param("id")).Error

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	c.BindJSON(&giveaway)

	err = db.Save(&giveaway).Error

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"user": giveaway})
}

func (u GiveawayController) Delete(c *gin.Context) {

	id := c.Param("id")

	if id == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	db := services.GetDB()

	var giveaway models.Giveaway
	err := db.First(&giveaway, c.Param("id")).Error

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Giveaway not found"})
		return
	}

	err = db.Delete(&giveaway).Error

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Giveaway deleted"})
}
