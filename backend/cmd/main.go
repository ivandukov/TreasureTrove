package main

import (
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"treasuretrove/api/routes"
	"treasuretrove/api/services/database"
)

func main() {
	//ignore err because sometimes the env comes from docker compose
	_ = godotenv.Load()

	database.ConnectToDatabase()
	database.MigrateModels()

	ginEngine := gin.Default()
	routes.InitRoutes(ginEngine)
	err := ginEngine.Run()
	if err != nil {
		panic("Error starting gin engine")
	} // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
