package helper

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

// BindAndValidateRequestQuery binds the request to the query and validates the request struct
func BindAndValidateRequestQuery(context *gin.Context, request interface{}) error {
	if err := context.BindQuery(request); err != nil {
		return err
	}

	validation := validator.New()
	if err := validation.Struct(request); err != nil {
		return err
	}

	return nil
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
