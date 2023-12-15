package controllers

import (
	"net/http"
	"treasuretrove/models"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"golang.org/x/crypto/bcrypt"
)

type UserController struct {}

// Functionname: GetAllUsers
//
// Description:
//   - retrieves all users and returns them as a JSON-Object
//   - GET users/
//
// Parameters:
//   - context: The context of the request
func (usercontroller UserController) GetAllUsers(context *gin.Context) {
	database := services.GetDatabase()
	var users []models.User
	database.Find(&users)
	context.JSON(http.StatusOK, gin.H{"users": users})
}

// Functionname: CreateUser
//
// Description:
//   - retrieves all users and returns them as a JSON-Object
//   - GET users/
//
// Parameters:
//   - context: The context of the request
func (usercontroller UserController) CreateUser(context *gin.Context) {

	validator := validator.New()
	database := services.GetDatabase()

	var user models.User

	context.BindJSON(&user)

	validationErr := validator.Struct(user)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	// hash password
	hashedPassword, errHash := bcrypt.GenerateFromPassword([]byte(user.Password), 8)

	if errHash != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": errHash.Error()})
	}

	user.Password = string(hashedPassword)

	dbErr := database.Create(&user).Error

	if dbErr != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": dbErr.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": user})
}

// Functionname: GetUserById
//
// Description:
//   - retrieves a specific user by ID
//   - GET users/:id
//
// Parameters:
//   - context: The context of the request
func (usercontroller UserController) GetUserById(context *gin.Context) {

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

// Functionname: UpdateUserById
//
// Description:
//   - updates an existing User by ID
//   - PUT users/:id
//
// Parameters:
//   - context: The context of the request
func (usercontroller UserController) UpdateUserById(context *gin.Context) {

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

	context.BindJSON(&user)

	err = database.Save(&user).Error

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": user})
}

// Functionname: DeleteUserById
//
// Description:
//   - deletes an existing User by ID
//   - DELETE users/:id
//
// Parameters:
//   - context: The context of the request
func (usercontroller UserController) DeleteUserById(context *gin.Context) {

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