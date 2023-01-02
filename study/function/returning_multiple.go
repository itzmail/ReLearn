package main

import "fmt"

/* Di golang bisa mereturn multiple value */

func getFullName() (string, int) {
	return "Ismail", 22
}

func main() {
	// untuk ambil function yang me return multiple func
	first, second := getFullName()

	fmt.Println(first, second)

	// Kalau kita hanya butuh return pertama, kita bisa beri _
	data, _ := getFullName()

	fmt.Println(data)
}
