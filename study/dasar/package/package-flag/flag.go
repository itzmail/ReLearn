package main

import (
	"flag"
	"fmt"
)

func main() {
	host := flag.String("host", "localhost", "Put your database host")
	user := flag.String("username", "root", "Put your database username")
	pass := flag.String("password", "root", "Put your database password")
	port := flag.Int("port", 3360, "Put your port database")

	flag.Parse()

	fmt.Println("Host :", *host)
	fmt.Println("Username :", *user)
	fmt.Println("Password :", *pass)
	fmt.Println("Port :", *port)

	// run
	// go run flag.go -host="Ismail" -username="ismail" -password="mantap"
	/*
		output:
		Host : Ismail
		Username : ismail
		Password : mantap
	*/
}
