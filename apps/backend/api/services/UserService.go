package services

import (
	"apps/backend/api/helper"
	"apps/backend/api/models"
	"apps/backend/api/requests"
	"apps/backend/api/services/database"
	"log"

	"golang.org/x/crypto/bcrypt"
)

type UserService struct{}

// GetAllUsers retrieves all users and returns them as a JSON-Object
func (userService UserService) GetAllUsers() (users []models.User) {
	db := database.GetDatabase()

	var allUsers []models.User

	// See https://stackoverflow.com/a/59854031
	//     https://stackoverflow.com/a/56833046
	err := db.
		Preload("CreatedGiveaways").
		Preload("SavedGiveaways").
		Preload("CreatedRequests").
		Preload("SavedRequests").
		Find(&allUsers).Error
	if err != nil {
		return []models.User{}
	}

	return allUsers
}

// GetUserById retrieves a specific user by ID
func (userService UserService) GetUserById(id uint64) (models.User, error) {
	db := database.GetDatabase()

	var user models.User

	err := db.Preload("createdgiveaways").First(&user, id).Error
	if err != nil {
		return models.User{}, err
	}

	return user, nil
}

func (userService UserService) GetAllCreatedGiveawaysByUserId(userId uint64) ([]models.Giveaway, error) {

	db := database.GetDatabase()

	var createdGiveaways []models.Giveaway

	err := db.Where("author_id = ?", userId).Find(&createdGiveaways).Error
	if err != nil {
		return []models.Giveaway{}, err
	}
	return createdGiveaways, nil
}

func (userService UserService) GetAllSavedGiveawaysByUserId(userId uint64) ([]models.Giveaway, error) {

	db := database.GetDatabase()

	var savedGiveaways []models.Giveaway

	err := db.Select("saved_Giveaways").Where("id = ?", userId).Find(&savedGiveaways).Error
	if err != nil {
		return []models.Giveaway{}, err
	}

	return savedGiveaways, nil
}

func (userService UserService) GetAllCreatedRequestsByUserId(userId uint64) ([]models.Request, error) {
	db := database.GetDatabase()

	var createdRequests []models.Request

	err := db.Where("author_id = ?", userId).Find(&createdRequests).Error
	if err != nil {
		return []models.Request{}, err
	}

	return createdRequests, nil
}

func (userService UserService) GetAllSavedRequestsByUserId(userId uint64) ([]models.Request, error) {
	db := database.GetDatabase()

	var savedRequests []models.Request

	err := db.Select("savedrequests").Where("id = ?", userId).Find(&savedRequests).Error
	if err != nil {
		return []models.Request{}, err
	}

	return savedRequests, nil
}

// CreateUser creates a new User entity in the database
func (userService UserService) CreateUser(request requests.UserCreateRequest) (models.User, error) {
	db := database.GetDatabase()

	hashedPassword, errHash := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.DefaultCost)

	if errHash != nil {
		return models.User{}, errHash
	}

	user := models.User{
		Username:    request.Username,
		Displayname: request.Displayname,
		Email:       request.Email,
		Password:    string(hashedPassword),
	}

	dbErr := db.Create(&user).Error

	if dbErr != nil {
		log.Println(dbErr.Error())
		return models.User{}, dbErr
	}

	return user, nil
}

// UpdateUser updates a specific user
func (userService UserService) UpdateUser(id uint64, request requests.UserUpdateRequest) (models.User, error) {
	db := database.GetDatabase()

	var user models.User

	err := db.First(&user, id).Error
	if err != nil {
		return models.User{}, err
	}

	helper.UpdateFieldsFromRequest(request, &user)

	err = db.Save(&user).Error
	if err != nil {
		return models.User{}, err
	}

	return user, nil
}

// RemoveUser removes a specific user from the database
func (userService UserService) DeleteUser(id uint64) error {

	db := database.GetDatabase()

	var user models.User

	err := db.First(&user, id).Error

	if err != nil {
		return err
	}

	err = db.Unscoped().Delete(&user).Error // See https://gorm.io/docs/delete.html#Delete-permanently

	if err != nil {
		return err
	}

	return nil
}
