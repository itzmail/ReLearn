package main

import (
	"fmt"
	"time"
)

/*
* Package time adalah package yang berisikan fungsionalitas untuk management waktu di Go-Lang
* https://golang.org/pkg/time/
 */

func main() {
	var now time.Time = time.Now()
	fmt.Println(now)

	var utc time.Time = time.Date(2009, time.August, 17, 0, 0, 0, 0, time.UTC)
	fmt.Println(utc)
	fmt.Println(utc.Local())

	formatter := "2006-01-02 15:04:05" // untuk format nya bisa lihat di document, karena beda bukan bentuk seperti YYYY-MM-dd

	value := "2020-10-10 10:10:10"
	// value := "ASAL"
	valueTime, err := time.Parse(formatter, value)
	if err != nil {
		fmt.Println("Error", err.Error())
	} else {
		fmt.Println(valueTime)
	}

	fmt.Println(valueTime.Year())
	fmt.Println(valueTime.Month())
	fmt.Println(valueTime.Day())
	fmt.Println(valueTime.Hour())
}
