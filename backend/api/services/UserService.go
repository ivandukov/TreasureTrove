package services

import (
	"golang.org/x/crypto/bcrypt"
	"log"
	"time"
	"treasuretrove/api/helper"
	"treasuretrove/api/models"
	"treasuretrove/api/requests"
	"treasuretrove/api/services/database"
)

type GiveawayWithoutUser struct {
	ID          uint      `gorm:"primary_key" json:"id"`
	Title       string    `gorm:"size:255;not null" validate:"required,min=3,max=255" json:"title"`
	Description string    `gorm:"size:255" validate:"required,min=3,max=9000" json:"description"`
	CreatedAt   time.Time `gorm:"default:CURRENT_TIMESTAMP" json:"createdAt"`
	Status      string    `gorm:"size:255" json:"status"`
	Location    string    `gorm:"size:255" json:"location"`
	ImgUrl      string    `gorm:"size:255" json:"imgUrl"`
	UserId      uint      `json:"userId" validate:"required"`
}

type UserService struct{}

// GetAllUsers retrieves all users and returns them as a JSON-Object
func (userService UserService) GetAllUsers() (users []models.User) {
	db := database.GetDatabase()

	var allUsers []models.User
	db.Find(&allUsers)

	return allUsers
}

// CreateUser creates a new User entity in the database
func (userService UserService) CreateUser(request requests.UserCreateRequest) (models.User, error) {
	db := database.GetDatabase()

	hashedPassword, errHash := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.DefaultCost)

	if errHash != nil {
		return models.User{}, errHash
	}

	user := models.User{
		Username:  request.Username,
		Email:     request.Email,
		Address:   request.Address,
		FirstName: request.FirstName,
		LastName:  request.LastName,
		Password:  string(hashedPassword),
	}

	dbErr := db.Create(&user).Error

	if dbErr != nil {
		log.Println(dbErr.Error())
		return models.User{}, dbErr
	}

	return user, nil
}

// GetUserById retrieves a specific user by ID
func (userService UserService) GetUserById(id uint64) (models.User, error) {
	db := database.GetDatabase()

	var user models.User
	err := db.First(&user, id).Error

	db.Preload("Giveaways.Categories").First(&user, id)

	if err != nil {
		return models.User{}, err
	}

	return user, nil
}

// UpdateUser updates a specific user
func (userService UserService) UpdateUser(id uint64, request requests.UserUpdateRequest) (models.User, error) {
	db := database.GetDatabase()

	var prevUser models.User
	err := db.First(&prevUser, id).Error

	if err != nil {
		return models.User{}, err
	}

	helper.UpdateFieldsFromRequest(request, &prevUser)

	err = db.Save(&prevUser).Error

	if err != nil {
		return models.User{}, err
	}

	return prevUser, nil
}

// RemoveUser removes a specific user from the database
func (userService UserService) RemoveUser(id uint64) error {
	db := database.GetDatabase()
	var user models.User
	err := db.First(&user, id).Error

	if err != nil {
		return err
	}

	err = db.Delete(&user).Error

	if err != nil {
		return err
	}

	return nil
}
