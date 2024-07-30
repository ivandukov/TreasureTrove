package helper

import (
	"errors"
	"os"
	"strings"
)

// GetArrayConfigItem Gets the config item from the environment variables, keep in mind that the env entries should be comma separated.
func GetArrayConfigItem(key string) (*[]string, error) {
	envEntry := os.Getenv(key)

	if envEntry == "" {
		return nil, errors.New("no entry found for key " + key)
	}

	//split the string by comma
	envEntryArray := strings.Split(envEntry, ",")

	return &envEntryArray, nil
}
