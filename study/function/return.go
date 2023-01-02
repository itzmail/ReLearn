package main

import "fmt"

// Return bisa ditetapkan seperti dibawah ini (Persis seperti typescript)
func sayHello(name string) string {
	return "Hello " + name
}

func main() {
	result := sayHello("Ismail")

	fmt.Println(result)
}
