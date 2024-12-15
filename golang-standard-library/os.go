package main

import (
	"fmt"
	"os"
)

func main() {
	var args = os.Args
	fmt.Printf("Arguments: %v\n", args)

	hostname, err := os.Hostname()
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("Hostname: %s\n", hostname)
	}
}
