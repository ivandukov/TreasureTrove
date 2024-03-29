package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"golang.org/x/crypto/bcrypt"
	"log"
	"net/http"
	"strconv"
	"treasuretrove/api/models"
	"treasuretrove/api/services"
)

type UserController struct{}

// GetAllUsers retrieves all users and returns them as a JSON-Object
//
// HTTP-Request: GET user/
//
// Parameters:
//   - context: The context of the request
func (userController UserController) GetAllUsers(context *gin.Context) {
	database := services.GetDatabase()
	var users []models.User
	database.Find(&users)
	context.JSON(http.StatusOK, gin.H{"users": users})
}

// CreateUser creates a new User
//
// HTTP-Request: POST user/
//
// Parameters:
//   - context: The context of the request
func (userController UserController) CreateUser(context *gin.Context) {

	validation := validator.New()
	database := services.GetDatabase()

	var user models.User

	bindJsonErr := context.BindJSON(&user)
	if bindJsonErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": bindJsonErr.Error()})
		return
	}

	validationErr := validation.Struct(user)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	hashedPassword, errHash := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)

	if errHash != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": errHash.Error()})
	}

	user.Password = string(hashedPassword)

	dbErr := database.Create(&user).Error

	if dbErr != nil {
		//log error
		log.Println(dbErr.Error())
		context.JSON(http.StatusInternalServerError, gin.H{"error": dbErr.Error()})
		return
	}

	context.JSON(http.StatusCreated, gin.H{"user": user})
}

// GetUserById retrieves a specific user by ID
//
// HTTP-Request: GET user/:id
//
// Parameters:
//   - context: The context of the request
func (userController UserController) GetUserById(context *gin.Context) {

	userId := context.Param("id")

	if userId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	database := services.GetDatabase()

	var user models.User
	err := database.First(&user, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": user})
}

// UpdateUserById updates an existing User by ID
//
// HTTP-Request: PUT user/:id
//
// Parameters:
//   - context: The context of the request
func (userController UserController) UpdateUserById(context *gin.Context) {

	userId := context.Param("id")

	if userId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	//userId as uint
	userIdUint, errUint := strconv.ParseInt(userId, 10, 64)

	if errUint != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": errUint.Error()})
		return
	}

	database := services.GetDatabase()

	var prevUser models.User
	err := database.First(&prevUser, userIdUint).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	var user models.User

	bindJsonErr := context.BindJSON(&user)

	if bindJsonErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": bindJsonErr.Error()})
		return
	}

	validation := validator.New()
	validationErr := validation.Struct(user)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	err = database.Model(&prevUser).Updates(user).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": user})
}

// DeleteUserById deletes an existing User by ID
//
// HTTP-Request: DELETE user/:id
//
// Parameters:
//   - context: The context of the request
func (userController UserController) DeleteUserById(context *gin.Context) {

	userId := context.Param("id")

	if userId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided"})
		return
	}

	database := services.GetDatabase()

	var user models.User
	err := database.First(&user, context.Param("id")).Error

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	err = database.Delete(&user).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "User deleted"})
}
