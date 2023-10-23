package main

import "fmt"

func getCompleteName() (first, second, last string) { // return first, second, and last
	first = "Ismail"
	second = "Nur"
	last = "Alam"

	return
}

func main() {
	data1, data2, data3 := getCompleteName()

	fmt.Println(data1)
	fmt.Println(data2)
	fmt.Println(data3)
}
