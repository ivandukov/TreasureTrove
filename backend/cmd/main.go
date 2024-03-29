package main

import (
	"github.com/gin-gonic/gin"
	"treasuretrove/api/routes"
	"treasuretrove/api/services"
)

func main() {
	services.ConnectToDatabase()
	services.MigrateModels()

	ginEngine := gin.Default()
	routes.InitRoutes(ginEngine)
	err := ginEngine.Run()
	if err != nil {
		panic("Error starting gin engine")
	} // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
