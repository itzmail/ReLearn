package main

import (
	"errors"
	"fmt"
	"strconv"
)

/*
* Sebelumnya kita sudah belajar cara konversi tipe data, misal dari int32 ke int34
* Bagaimana jika kita butuh melakukan konversi yang tipe datanya berbeda? Misal dari int ke string, atau sebaliknya
* Hal tersebut bisa kita lakukan dengan bantuan package strconv (string conversion)
https://golang.org/pkg/strconv/
*/

var (
	ErrorConversion = errors.New("Error Conversion")
)

func main() {
	boolean, err := strconv.ParseBool("true")
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Boolean:", boolean)
	}

	// Contoh penggunaan fungsi convertion
	result, err := convertion("bool", "true")
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result:", result)
	}

}

func convertion(tipe string, value string) (any, error) {
	switch tipe {
	case "bool":
		return strconv.ParseBool(value)
	case "int":
		return strconv.Atoi(value)
	case "int64":
		return strconv.ParseInt(value, 10, 64)
	case "float64":
		return strconv.ParseFloat(value, 64)
	case "uint64":
		return strconv.ParseUint(value, 10, 64)
	case "string":
		return value, nil
	default:
		return nil, ErrorConversion
	}
}
