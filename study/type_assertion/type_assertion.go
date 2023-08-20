package main

import "fmt"

/*
Type Assertion ini digunakan untuk konversi dari interface{}
Yang perlu diperhatikan adalah pastikan return valuenya, string, int, atau bool */

func ownName() interface{} {
	name := [3]interface{}{
		"mantap", 1, true,
	}
	return name
}

func main() {
	result := ownName()
	// fmt.Println(result.(type))
	// resultToString := result.(string)
	// resultToString := result.(int) kalau salah conversi dari interface {} maka akan terjadi PANIC
	// fmt.Print(`Result `, resultToString)

	// Solusi kalau kita tidak tahu return value dari interface kosong maka bisa pakai switch
	// Ini lebih aman
	switch resultRandom := result.(type) {
	case string:
		fmt.Print("This value is String ", resultRandom)
		break
	case int:
		fmt.Print("This value is Integer ", resultRandom)
		break
	default:
		fmt.Print("Value is unknow, the type is ", resultRandom)
	}
}
