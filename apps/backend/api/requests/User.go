package requests

// UserCreateRequest contains validation rules for Creating a User
type UserCreateRequest struct {
	Username    string `json:"username" validate:"required,min=3,max=30"`
	Displayname string `json:"displayname" validate:"required,min=3,max=30"`
	Email       string `json:"email" validate:"required,email,min=3,max=40"`
	Password    string `json:"password" validate:"required,min=3,max=255"`
}

// UserUpdateRequest contains validation rules for Updating a User
type UserUpdateRequest struct {
	Username    string `json:"username" validate:"omitempty,min=3,max=30"`
	Displayname string `json:"displayname" validate:"omitempty,min=3,max=30"`
	Email       string `json:"email" validate:"omitempty,email,min=3,max=100"`
}
