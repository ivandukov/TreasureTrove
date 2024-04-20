package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"net/http"
	"strconv"
	"treasuretrove/api/helper"
	"treasuretrove/api/requests"
	"treasuretrove/api/services"
)

type UserController struct {
	IUserService services.UserService
}

// GetAllUsers retrieves all users and returns them as a JSON-Object
//
// HTTP-Request: GET user/
//
// Parameters:
//   - context: The context of the request
func (userController UserController) GetAllUsers(context *gin.Context) {
	users := userController.IUserService.GetAllUsers()

	context.JSON(http.StatusOK, gin.H{"users": users})
}

// CreateUser creates a new User
//
// HTTP-Request: POST user/
//
// Parameters:
//   - context: The context of the request
func (userController UserController) CreateUser(context *gin.Context) {

	var request requests.UserCreateRequest

	err := helper.BindAndValidateRequestBody(context, &request)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := userController.IUserService.CreateUser(request)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
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

	var request requests.UserGetOrDeleteRequest

	// binds request to query
	err := helper.BindAndValidateRequestQuery(context, &request)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := userController.IUserService.GetUserById(request)

	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": user})
}

// UpdateUser updates an existing User by ID
//
// HTTP-Request: PUT user/:id
//
// Parameters:
//   - context: The context of the request
func (userController UserController) UpdateUser(context *gin.Context) {

	userId := context.Param("id")

	if userId == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "No id provided."})
		return
	}

	//userId as uint
	userIdUint, errUint := strconv.ParseInt(userId, 10, 64)

	if errUint != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": errUint.Error()})
		return
	}

	var request requests.UserUpdateRequest

	bindJsonErr := context.BindJSON(&request)

	if bindJsonErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": bindJsonErr.Error()})
		return
	}

	validation := validator.New()
	validationErr := validation.Struct(request)

	if validationErr != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	user, err := userController.IUserService.UpdateUser(uint(userIdUint), request)

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

	var request requests.UserGetOrDeleteRequest

	err := helper.BindAndValidateRequestQuery(context, &request)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return

	}

	err = userController.IUserService.RemoveUser(request)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "User deleted"})
}
