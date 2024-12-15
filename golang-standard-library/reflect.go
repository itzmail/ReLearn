package main

/*
* Dalam bahasa pemrograman, biasanya ada fitur Reflection, dimana kita bisa melihat struktur kode kita pada saat aplikasi sedang berjalan
* Hal ini bisa dilakukan di Go-Lang dengan menggunakan package reflect
* Fitur ini mungkin tidak bisa dibahas secara lengkap dalam satu video, Anda bisa eksplorasi package reflec ini secara otodidak
* Reflection sangat berguna ketika kita ingin membuat library yang general sehingga mudah digunakan
* https://golang.org/pkg/reflect/
 */

import (
	"fmt"
	"reflect"
)

type Sample struct {
	Name string `required:"true" max:"10"`
}

type Person struct {
	Name    string `required:"true" max:"10"`
	Address string `required:"true" max:"10"`
	Email   string `required:"true" max:"10"`
}

func readField(value any) {
	var valueType reflect.Value = reflect.ValueOf(value)
	fmt.Printf("Tipe data %v\n", valueType.Type())

	for i := 0; i < valueType.NumField(); i++ {
		var structField reflect.StructField = valueType.Type().Field(i)
		fmt.Printf("Field %v, tipe data %v, tag %v\n", structField.Name, structField.Type, structField.Tag.Get("required"))
	}
}

func IsValid(data any) (results bool) {
	results = true
	t := reflect.TypeOf(data)

	for i := 0; i < t.NumField(); i++ {
		field := t.Field(i)
		if field.Tag.Get("required") == "true" {
			value := reflect.ValueOf(data).Field(i).Interface()
			if value == "" {
				results = false
			}
		}
	}

	return results
}

func main() {
	sample := Sample{Name: "Eko"}
	person := Person{Name: "Eko", Address: "Indonesia", Email: ""}

	readField(sample)
	readField(person)

	fmt.Println(IsValid(sample))
	fmt.Println(IsValid(person))
}
