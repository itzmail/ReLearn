package main

import "fmt"

/* Nil biasanya di bahasa lain itu sama dengan null

nah tetapi, di golang bila kita menginisialisasikan suatu varible
contoh : var mantap string; maka value dari var mantap itu 	STRING KOSONG

* hanya beberapa tipe data yang bisa di set NIL
interface, function, map, slice, pointer, dan chanel
*/

func NewMap(name string) map[string]string {
	if name == "" {
		return nil
	} else {
		return map[string]string{
			"name": name,
		}
	}
}

func main() {
	dataMap := NewMap("jos")

	if dataMap == nil {
		fmt.Println("DATA KOSONG")
	} else {
		fmt.Println("Data Map", dataMap)
	}
}
