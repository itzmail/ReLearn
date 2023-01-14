package main

import "fmt"

/*
  Interface merupatakan tipe data Abstract yang berisikan kumpulan method
  bedanya dengan struct dia tidak bisa di consume langsung
*/

type HasName interface {
	GetName() string
}

/*
  Implementasi pada interface
  agar kita bisa memakai function getName maka kita harus buat func lagi seperti dibawah ini
*/
type Person struct {
	Name string
}

func (person Person) GetName() string {
	return person.Name
}

// Contoh implementasi interface 2
type Animal struct {
	Name string
}

func (animal Animal) GetName() string {
	return animal.Name
}

func sayHello(hasName HasName) {
	fmt.Println("Hi", hasName.GetName())
}

func main() {
	var ismail Person
	ismail.Name = "Ismail"

	sayHello(ismail)

	cat := Animal{
		Name: "Puss",
	}

	sayHello(cat)
}
