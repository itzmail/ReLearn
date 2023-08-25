package database

import "fmt"

var connection string

/*
	Ketika file ini dijalankan maka yang akan dijalankan terlebih dahulu func ini()
*/

func init() {
	fmt.Println("INIT Dipanggil")
	connection = "MySQL"
}

func GetDatabase() string {
	return connection
}
