package main

import (
	"container/ring"
	"fmt"
	"strconv"
)

/*
	* Package container/ring adalah implementasi struktur data circular list
	* Circular list adalah struktur data ring, dimana diakhir element akan kembali ke element awal (HEAD)

	https://golang.org/pkg/container/ring/
*/

func main() {
	var data *ring.Ring = ring.New(5)

	for i := 0; i < data.Len(); i++ {
		data.Value = "Value " + strconv.Itoa(i)
		data = data.Next()
	}

	//data.Value = "Value 1"
	//
	//data = data.Next()
	//data.Value = "Value 2"
	//
	//data = data.Next()
	//data.Value = "Value 3"
	//
	//data = data.Next()
	//data.Value = "Value 4"
	//
	//data = data.Next()
	//data.Value = "Value 5"

	data.Do(func(value any) {
		fmt.Println(value)
	})

	data = data.Next()
	fmt.Println(data.Value) // data back to Value 1
}
