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

  child["message"] = string(128);
  fmt.Println(child)

  // Membuat Map
  MakeMap := make(map[string]string);

  MakeMap["status"] = "success"
  MakeMap["message"] = "Berhasil membuat Map"
  MakeMap["ups"] = "Ini salah harus dihapus"

  // Menghapus data yang ada di Map
  delete(MakeMap, "ups")

  fmt.Println(MakeMap)
}
