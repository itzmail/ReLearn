package main

import (
	"fmt"
	"net/http"

	authcontroller "go-auth/controllers"
)

func main() {
	http.HandleFunc("/", authcontroller.Index)
	http.HandleFunc("/login", authcontroller.Login)

	fmt.Println("Server running in http://localhost:3000")
	http.ListenAndServe(":3000", nil)
}
