package main

import "fmt"

func main() {
  // Map adalah tipe data kumpulan key-value (kata kunci - nilai), dimana kata kuncinya bersifat unik, tidak boleh sama
  // di Array dan slice data yang ditampung ada batasnya, sedangkan di object bisa sebanyak-banyaknya, dengan kata kunci beda
  // map[key]value{}

  person := map[int]string{
    1: "Mantap jiwa",
    2: "Jos tenan",
  }

  fmt.Println(person)

  child := map[string]string{
    "mantap": "jos",
  }


  fmt.Println(child["mantap"])
}
