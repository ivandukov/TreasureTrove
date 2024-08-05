package main

import (
	"os"

	"apps/backend/api/routes"
	"apps/backend/api/services/database"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// load .env file
	err := godotenv.Load()
	if err != nil {
		panic("Error when loading .env file")
	}

	database.ConnectToDatabase()
	database.MigrateModels()
	database.Seed()

	ginEngine := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{os.Getenv("ALLOWED_ORIGINS")}
	config.AllowHeaders = []string{"Content-Type"}

	ginEngine.Use(cors.New(config))

	routes.InitRoutes(ginEngine)

	// listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
	err = ginEngine.Run()
	if err != nil {
		panic("Error when starting gin engine")
	}

}
