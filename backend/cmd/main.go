package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"treasuretrove/api/routes"
	"treasuretrove/api/services"
	"github.com/gin-contrib/cors"
)

func main() {
	//ignore err because sometimes the env comes from docker compose
	_ = godotenv.Load()

	services.ConnectToDatabase()
	services.MigrateModels()
	ginEngine := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	ginEngine.Use(cors.New(config))

	routes.InitRoutes(ginEngine)
	err := ginEngine.Run()
	if err != nil {
		panic("Error starting gin engine")
	} // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
