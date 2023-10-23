package main

import "fmt"

type Filter func(string) string

func sayHellowithFilter(name string, filter Filter) string {
	nameFilter := filter(name)
	return "Hello " + nameFilter
}

/* Function ini sebagai argument di parameter sayHEllowithFilter */
func spamFilter(name string) string {
	if name == "Anjing" {
		return "..."
	} else {
		return name
	}
}

func main() {
	name := "Ismail"
	helloMail := sayHellowithFilter(name, spamFilter)

	fmt.Println(helloMail)
}
