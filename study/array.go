package main

import "fmt"

func main() {
  var names [3]string

  names[0] = "Ismail"
  names[1] = "Nur"

  var values = [3]int{
    96, 97, 98,
  }

  // panjang array len()
  fmt.Println(len(values));
}
