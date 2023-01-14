package main

import "fmt"

/**
  struct dipakai untuk merepresentasikan data,
  Struct sendiri bisa didefinisikan sebagai kumpulan beberapa field (object)
  
  kalau di OOP namanya class
*/

type Customer struct {
  name, address string;
  age int
}

func main() {
  ismail := Customer {
    name: "Ismail",
    address: "Magelang",
    age: 22,
  }

  fmt.Println(ismail)
}
