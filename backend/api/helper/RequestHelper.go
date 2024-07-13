package helper

import (
	"errors"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"strconv"
)

// GetIdFromParam gets the id from the request parameters and casts it to uint
func GetIdFromParam(idAsString string) (uint64, error) {

	if idAsString == "" {
		return 0, errors.New("no id provided")
	}

	//id as uint
	idUint, errUint := strconv.ParseUint(idAsString, 10, 64)

	if errUint != nil {
		return 0, errUint
	}

	return idUint, nil
}

// BindAndValidateRequestBody binds the request to the body and validates the request struct
func BindAndValidateRequestBody(context *gin.Context, request interface{}) error {
	if err := context.BindJSON(request); err != nil {
		return err
	}

	validation := validator.New()
	if err := validation.Struct(request); err != nil {
		return err
	}

	return nil
}
