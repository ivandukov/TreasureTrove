package main

import (
	"treasuretrove/routes"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
)

func main() {
	services.ConnectToDatabase()
	services.MigrateModels()

	ginEngine := gin.Default()
	routes.InitRoutes(ginEngine)
	ginEngine.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}