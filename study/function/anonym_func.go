package main

import "fmt"

type Filter func(string) bool

func validateName(name string, filter Filter) {
	if filter(name) {
		fmt.Println("Nama anda di block")
	} else {
		fmt.Println("Nama anda lolos validasi")
	}
}

func main() {
	name := "Ismail"
	funcName := func(name string) bool {
		return name == "admin"
	}

	validateName(name, funcName)
}
