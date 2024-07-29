package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"apps/backend/api/helper"
	"apps/backend/api/routes"
	"apps/backend/api/services/database"
)

func main() {
	// ignore err because sometimes the env comes from docker compose
	_ = godotenv.Load()

	database.ConnectToDatabase()
	database.MigrateModels()
	ginEngine := gin.Default()

	config := cors.DefaultConfig()
	allowedOrigins, configNotFound := helper.GetArrayConfigItem("ALLOWED_ORIGINS")

	if configNotFound != nil {
		config.AllowOrigins = []string{"http://localhost:5173"}
	} else {
		config.AllowOrigins = *allowedOrigins
	}

	ginEngine.Use(cors.New(config))

	routes.InitRoutes(ginEngine)
	err := ginEngine.Run()
	if err != nil {
		panic("Error starting gin engine")
	} // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
