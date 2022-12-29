package main

import "fmt"

func main() {
  type NoKTP string
  type IsMarried bool

  var eKTP NoKTP = "123123123123"
  var statusMaried IsMarried = true

  fmt.Println(eKTP)
  fmt.Println(statusMaried)
}
