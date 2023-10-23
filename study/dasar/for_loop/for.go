package main

import (
	"fmt"
)

func main() {
	counter := 1

	/* go version go1.19.4 windows/amd64
	* Perulangan hanya for loop */

	// Bentuk dasarnya
	for counter <= 10 {
		fmt.Println("Perulangan ke-", counter)
		counter++
	}

	// Bentuk Ringkas
	for countdown := 10; countdown >= 0; countdown-- {
		fmt.Println("Hitung mundur", countdown)
	}

	/* FOR RANGE */
	iniSlice := []any{"Mantap", "Jiwa", 12}

	// 1
	for countSlice := 0; countSlice < len(iniSlice); countSlice++ {
		fmt.Println("data : ", iniSlice[countSlice])
	}

	// 2 ( pakai ini kalau pakai kayak foreach)
	// for index, data := range iniSlice {
	// fmt.Println("Index ", index, "=", data)
	// kalau kita ngga mau pakai index kasih _, kita kasih tahu golang kalau kita ngga pakai variable itu
	for _, data := range iniSlice {
		fmt.Println(data)
	}

	// Untuk perulangan Map
	iniMap := make(map[string]string)

	iniMap["name"] = "Ismail"
	iniMap["title"] = "Direktur"

	for kunci, value := range iniMap {
		fmt.Print(kunci, "=", value)
	}
}
