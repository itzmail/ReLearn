package main

import "fmt"

type Subscriber struct {
	name, gender string
	age          int
}

/*
* Struct adalah tipe data seperti tipe data lainnya, dia bisa digunakan sebagai parameter untuk function
* Namun jika kita ingin menambahkan method ke dalam structs, sehingga seakan-akan sebuah struct memiliki function
* Method adalah function
 */

// kalau ini parameter pertama dimasukkan menggunakan struct person
func sayHi(person Subscriber, name string) {
	fmt.Println("Hello", person.name, "My Name is", name)
}

// Kalau dilihat di bawah ini, Struct Method ini berada di luar blok pendefinisian structh itu sendiri
func (person Subscriber) sayHello() {
	fmt.Println("Hello, My Name is", person.name)
}

func main() {
	rully := Subscriber{name: "Rully"}
	rully.sayHello()

	sayHi(rully, "Ismail")
}
