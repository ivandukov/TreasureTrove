package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"treasuretrove/api/routes"
	"treasuretrove/api/services"
)

func main() {
	envLoad := godotenv.Load()

	if envLoad != nil {
		panic("Error loading .env file")
	}

	services.ConnectToDatabase()
	services.MigrateModels()

	ginEngine := gin.Default()
	routes.InitRoutes(ginEngine)
	err := ginEngine.Run()
	if err != nil {
		panic("Error starting gin engine")
	} // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}