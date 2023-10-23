package main

import (
	"fmt"
	"strconv"
)

func main() {
	boolean, err := strconv.ParseBool("true")
	if err == nil {
		fmt.Println(boolean)
	} else {
		fmt.Println(err.Error())
	}

	/*
		Base Int
		* 2 binary
		* 8 Oktal
		* 10 Decimal
		* 16 Hexadeximal
	*/
	number, err := strconv.ParseInt("1000000", 10, 64) // int64
	if err == nil {
		fmt.Println(number)
	} else {
		fmt.Println(err.Error())
	}

	value := strconv.FormatInt(100000, 10)
	fmt.Println(value)

	// cara cepat parse int <-> string

	valueInt, _ := strconv.Atoi("200000")
	fmt.Println(valueInt)

	valueString := strconv.Itoa(2000000)
	fmt.Println(valueString)
}
