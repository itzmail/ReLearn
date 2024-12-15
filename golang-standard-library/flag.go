package main

import (
	"flag"
	"fmt"
)

func main() {
	host := flag.String("host", "localhost", "Put your database host")
	username := flag.String("username", "root", "Put your database username")
	password := flag.String("password", "root", "Put your database password")

	flag.Parse() // ini digunakan untuk mengambil nilai dari flag, tanpa ini maka nilai dari flag tidak akan terbaca

	fmt.Println(*host, *username, *password)
}
