package main

import (
	"fmt"
	"reflect"
)

/*
	Package Reflect, ini package dimana kita bisa melihat struktur kode kita pada saat aplikasi sedang berjalan
	* Package ini sangat berguna ketika kita ingin membuat library yang general sehingga mudah digunakan

	https://golang.org/pkg/reflect/
*/

type User struct {
	Name string `required:"true" max:"10" jos:"mantap"` // backtick ini digunakan untuk memberkan tag pada field tersebut
	Age  int
}

func IsValid(data interface{}) bool {
	t := reflect.TypeOf(data)

	for i := 0; i < t.NumField(); i++ {
		field := t.Field(i)
		if field.Tag.Get("required") == "true" {
			return reflect.ValueOf(data).Field(i).Interface() != ""
		}
	}
	return true
}

func main() {
	var user = User{Name: "Ismail", Age: 0}
	var user2 = User{Name: "", Age: 0}

	var sample reflect.Type = reflect.TypeOf(user)

	fmt.Println("Berapa banya field ", sample.NumField())
	fmt.Println(sample.Field(0).Name) // mengetahui nama fieldnya
	fmt.Println(sample.Field(0).Tag.Get("required"))
	fmt.Println(sample.Field(0).Tag.Get("max"))
	fmt.Println(sample.Field(0).Tag.Get("jos"))

	fmt.Println("User 2", reflect.ValueOf(user2).Field(0))

	fmt.Println(IsValid(user))
}
