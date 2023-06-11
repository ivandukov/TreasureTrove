package main

import (
	"treasuretrove/routes"
	"treasuretrove/services"

	"github.com/gin-gonic/gin"
)

func main() {
	services.InitAndConnectDatabase()

	r := gin.Default()
	routes.InitRoutes(r)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
