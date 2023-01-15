package main

import "fmt"

/*
** Golang bukan bahasa OOP
Kalau di bahasa OOP ada, satu parent yang posisinya itu berada di puncak
contoh Java ada "Java.lang.Object" atau di kotlin ada "any"

Kalau di golang ada yang namanya interface kosong,
jadi interface kosong ini akan jadi implementasi semua tipe data
*/

func sayHello(mode int) interface{} {
	switch mode {
	case 1:
		return 2001
	case 2:
		return "Mantap Jiwa"
	default:
		return "MODE OUT OF RANGE"
	}
}

func main() {
	var hello interface{} = sayHello(3)

	fmt.Println(hello)
}
