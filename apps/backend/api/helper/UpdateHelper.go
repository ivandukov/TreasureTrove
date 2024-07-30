package helper

import (
	"reflect"
)

// UpdateFieldsFromRequest updates the fields of the target from the source using reflection
func UpdateFieldsFromRequest(source interface{}, target interface{}) {
	sourceValue := reflect.ValueOf(source)
	sourceType := reflect.TypeOf(source)
	targetValue := reflect.ValueOf(target).Elem()

	for i := 0; i < sourceValue.NumField(); i++ {
		// Get the field, then set it in the target struct if it's not the zero value
		field := sourceValue.Field(i)
		if field.Kind() == reflect.String && field.Interface() != "" {
			fieldName := sourceType.Field(i).Name
			targetValue.FieldByName(fieldName).Set(field)
		}
	}
}
