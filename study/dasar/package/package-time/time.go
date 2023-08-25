package main

import (
	"fmt"
	"time"
)

func main() {
	now := time.Now()
	fmt.Println(now.Local())

	utc := time.Date(2009, time.November, 10, 23, 0, 0, 0, time.UTC)
	fmt.Println("Time ", utc)

	layoutTime := "2006-01-02" // ini merupakan format 'yyyy-MM-dd' di golang, kenapa tanggal hal tersebut merupakan dokumentasinya
	parse, _ := time.Parse(layoutTime, "2023-08-23")
	fmt.Println("Parse Time ", parse)
}
