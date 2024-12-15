package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(strings.Contains("test", "es"))       // true
	fmt.Println(strings.Split("a,b,c", ","))          // [a b c]
	fmt.Println(strings.ToLower("TEST"))              // test
	fmt.Println(strings.ToUpper("test"))              // TEST
	fmt.Println(strings.Trim(" test ", " "))          // test
	fmt.Println(strings.Replace("test", "t", "a", 1)) // aest
}
