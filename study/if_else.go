package main

import (
	"fmt"
	"reflect"
)

func main() {
	name := "Isma"

	fmt.Print

	if name == "Ismail" {
		fmt.Println("Hello Ismail")
	} else if name == "Budi" {
		fmt.Println("Hello Budi")
	} else {
		fmt.Println("Hi kenalan donk")
	}

	// Short statement
	// if nama variable terus nama variable ini dipakai untuk if(statement)
	if length := len(name); length > 5 {
		fmt.Println("Nama sudah benar")
	} else if IsString := name == reflect.Array.String(); IsString {
		fmt.Println("Ini String")
	} else {
		fmt.Println("Nama kurang dari 5")
	}
}
