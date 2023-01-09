package main

import "fmt"

func goodBye(name string) string {
	return "Good Bye " + name
}

func main() {
	sayGoodBye := goodBye("Ismail")

	fmt.Println(sayGoodBye)
}
