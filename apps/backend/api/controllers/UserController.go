package controllers

import (
	"apps/backend/api/helper"
	"apps/backend/api/requests"
	"apps/backend/api/services"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
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

// GetUserById retrieves a specific user by ID
//
// HTTP-Request: GET user/:id
//
// Parameters:
//   - context: The context of the request
func (userController UserController) GetUserById(context *gin.Context) {

	id := context.Param("id")
	uIntId, err := helper.GetIdFromParam(id)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := userController.IUserService.GetUserById(uIntId)
	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"user": user})
}

func (userController UserController) GetAllCreatedGiveawaysByUserId(context *gin.Context) {

	userId := context.Param("id")
	uIntId, err := helper.GetIdFromParam(userId)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	createdGiveaways, err := userController.IUserService.GetAllCreatedGiveawaysByUserId(uIntId)
	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"createdGiveaways": createdGiveaways})
}

// GetAllSavedGiveaways retrieves all saved giveaways of a user
// and returns them as a JSON-Object
//
// HTTP-Request: GET user/:id/saved/giveaways
//
// Parameters:
//   - context: The context of the request
func (userController UserController) GetAllSavedGiveawaysByUserId(context *gin.Context) {

	userId := context.Param("id")
	uIntId, err := helper.GetIdFromParam(userId)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	savedGiveaways, err := userController.IUserService.GetAllSavedGiveawaysByUserId(uIntId)
	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"createdGiveaways": savedGiveaways})
}

func (userController UserController) GetAllCreatedRequestsByUserId(context *gin.Context) {

	userId := context.Param("id")
	uIntId, err := helper.GetIdFromParam(userId)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	createdRequests, err := userController.IUserService.GetAllCreatedGiveawaysByUserId(uIntId)
	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"createdGiveaways": createdRequests})
}

func (userController UserController) GetAllSavedRequestsByUserId(context *gin.Context) {
	userId := context.Param("id")
	uIntId, err := helper.GetIdFromParam(userId)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	savedRequests, err := userController.IUserService.GetAllSavedRequestsByUserId(uIntId)
	if err != nil {
		context.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"createdGiveaways": savedRequests})
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

// UpdateUser updates an existing User by ID
//
// HTTP-Request: PUT user/:id
//
// Parameters:
//   - context: The context of the request
func (userController UserController) UpdateUserById(context *gin.Context) {

	userId := context.Param("id")

	userIdUint, err := helper.GetIdFromParam(userId)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
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

	user, err := userController.IUserService.UpdateUser(userIdUint, request)

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

	id := context.Param("id")

	uIntId, err := helper.GetIdFromParam(id)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return

	}

	err = userController.IUserService.DeleteUser(uIntId)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "User deleted"})
}
