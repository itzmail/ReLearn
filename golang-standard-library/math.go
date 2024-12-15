package main

import (
	"fmt"
	"math"
)

// Docs : https://golang.org/pkg/math/

func main() {
	fmt.Println(math.Ceil(1.40))
	fmt.Println(math.Floor(1.60))
	fmt.Println(math.Round(1.60))
	fmt.Println(math.Max(10, 11)) // cek value maximal
	fmt.Println(math.Min(10, 11)) // cek value minimal
}
