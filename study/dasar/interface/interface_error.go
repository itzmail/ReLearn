package main

import (
	"errors"
	"fmt"
)

func cacluatePembagi(nilai int, pembagi int) (int, error) {
	if pembagi == 0 {
		return 0, errors.New("Tidak bisa membagi dengan angka 0")
	} else {
		result := nilai / pembagi
		return result, nil
	}
}

func main() {
	// var contohError error = errors.New("Ups Error")
	// fmt.Print(contohError)

	hasil, err := cacluatePembagi(2, 0)

	if err == nil {
		fmt.Print(`Hasil pembagi : `, hasil)
	} else {
		fmt.Print(`Error `, err.Error())
	}
}
