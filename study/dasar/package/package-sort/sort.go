package main

import "sort"

// package ini digunakan untuk pengurutan

type User struct {
	Name string
	Age  int
}

// Buat Interface{} seperti dibawah baik itu Function maupun tipe data

type UserSlice []User

func (value UserSlice) Len() int {
	return len(value)
}

func (value UserSlice) Less(i, j int) bool {
	return value[i].Age < value[j].Age
}

func (value UserSlice) Swap(i, j int) {
	value[i], value[j] = value[j], value[i]
}

// ! Ketiga function di atas merupakan function atau strutch function penting untuk di tambahkan

func main() {
	dataUser := []User{
		{Name: "Ismail", Age: 18},
		{Name: "Radit", Age: 20},
		{Name: "Ismail", Age: 21},
		{Name: "Ismail", Age: 18},
		{Name: "Ismail", Age: 20},
	}

	sort.Sort(UserSlice(dataUser))
}
