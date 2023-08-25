package main

import (
	"fmt"
	"os"
)

func main() {
	args := os.Args
	fmt.Println(args)

	fmt.Println("Argument : ")

	// args[0] itu berisikan lokasi file
	fmt.Println("Arg 1 : ", args[1])
	fmt.Println("Arg 2 : ", args[2])
	fmt.Println("Arg 3 : ", args[3])

	/*
		go run os.go

		Output :
		[/var/folders/b2/bw_vvphd29s24z2pb4f9grkr0000gn/T/go-build2414084004/b001/exe/os ismail nur alam]
		Argument :
		Arg 1 :  ismail
		Arg 2 :  nur
		Arg 3 :  alam
	*/

	hostname, err := os.Hostname()

	if err == nil {
		fmt.Println("Hostname : ", hostname)
	} else {
		fmt.Println("Error ", err)
	}
}
