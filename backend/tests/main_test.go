package tests

import (
	"os"
	"testing"
	"github.com/gin-gonic/gin"
)

func TestMain(main *testing.M) {
	gin.SetMode(gin.TestMode)
	exitCode := main.Run()
	os.Exit(exitCode)
}