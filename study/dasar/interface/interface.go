package main

import "fmt"

/*
  Interface merupatakan tipe data Abstract yang berisikan kumpulan method
  bedanya dengan struct dia tidak bisa di consume langsung
*/

type HasName interface {
	GetName() string // returnnya string
}

/* Ketika kita mau kontrak interface (istilah di golang) maka kita harus implementasikan function GetName() */

type Person struct {
	Name string
}

func sayHai(hasName HasName) {
	fmt.Println("Hai", hasName.GetName()) // Method GetName ini dari interface HasName
}

func (person Person) GetName() string {
	return person.Name
}

func main() {
	var ismail Person
	ismail.Name = "Ismail"
	sayHai(ismail)

	pet := Person{Name: "Katty"}
	sayHai(pet)
	// cat := Animal{
	// 	Name: "Puss",
	// }

	// sayWhatEver(cat)
}
