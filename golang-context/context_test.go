package golangcontext

import (
	"context"
	"fmt"
	"testing"
)

func TestContext(t *testing.T) {
	backaground := context.Background()
	fmt.Println(backaground)

	todo := context.TODO()
	fmt.Print(todo)
}

func TestContextWithValue(t *testing.T) {
	contextA := context.Background()

	contextB := context.WithValue(contextA, "b", "B")
	contextC := context.WithValue(contextA, "c", "C")

	contextD := context.WithValue(contextB, "d", "D")
	contextE := context.WithValue(contextB, "e", "E")

	fmt.Println(contextA)
	fmt.Println(contextB)
	fmt.Println(contextC)
	fmt.Println(contextD)
	fmt.Println(contextE)

	// Get Value
	fmt.Println(contextD.Value("b")) // dapat dari context b itu sendiri
	fmt.Println(contextD.Value("c")) // tidak dapat karena beda parent

	// konsep ambil value di context itu mengambil ke atas bukan ke bawah
}
