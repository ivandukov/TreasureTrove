package main

import (
	"treasuretrove/routes"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
)

func main() {
	services.InitAndConnectDatabase()
	services.MigrateModels()

	router := gin.Default()
	routes.InitRoutes(router)
	router.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}