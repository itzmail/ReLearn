package main

import "fmt"

func endApp() {
	fmt.Println("Applikasi selesai")

	message := recover()
	fmt.Println("Error dengan Message :", message)
	fmt.Println("Applikasi berjalan")
}

func runApp(error bool) {
	defer endApp() // meskipun error function ini tetap di jalankan

	if error {
		panic("APPLIKASI ERROR")
	}

	// Kode di bawah tidak dieksekusi
	// untuk mau recover ada di defer
}

func main() {
	runApp(true)
  fmt.Println("Code ini tetap jalan dengan message error")
}
