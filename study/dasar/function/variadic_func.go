package main

import "fmt"

func sumAllslice(numb []int) int {
	total := 0
	for _, number := range numb {
		total += number
	}

	return total
}

/* Variadic Function karena argument pada func tersebut bersifat slice atau array dengan ada tanda ...int */
/* Dan letak variable argument harus di akhir parameter */

func sumAllVarag(numb ...int) int {
	total := 0
	for _, number := range numb {
		total += number
	}

	return total
}

func main() {
	dataInt := []int{1, 2, 3, 4, 5, 6}

	fmt.Println(sumAllslice(dataInt))

	fmt.Println(sumAllVarag(dataInt...)) // ita udah punya slice maka kasih ... diakhir argument
}
