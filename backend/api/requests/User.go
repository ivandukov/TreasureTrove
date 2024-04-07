package requests

// UserCreateRequest create validation rules
type UserCreateRequest struct {
	Username  string `json:"username" validate:"required,min=3,max=255"`
	Email     string `json:"email" validate:"required,email,min=3,max=100"`
	Address   string `json:"address"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Password  string `json:"password" validate:"required,min=3,max=255"`
}

// UserUpdateRequest update validation rules
type UserUpdateRequest struct {
	Username  string `json:"username" validate:"omitempty,min=3,max=255"`
	Email     string `json:"email" validate:"omitempty,email,min=3,max=100"`
	Address   string `json:"address"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Password  string `json:"password" validate:"omitempty,min=3,max=255"`
}
