package main

import (
	"container/list"
	"fmt"
)

/*
	* Package ini adalah implementasi struktur data double linked list di golang
	* https://golang.org/pkg/container/list/

	* disebut double link list karena data tersebut bisa next dan previous dari array tersebut

	! Yang jadi masalah link list ialah untuk mengaksesnya tidak bisa menggunakan index, tetapi harus di iteration
*/

func main() {
	data := list.New()

	data.PushBack("Muhammad")
	data.PushBack("Fajar")
	data.PushBack("Rizky")

	/*
	* data.Front() = mengambil data pertama
	* data.Next() = mengambil data berikutnya
	* data.Prev() = mengambil data sebelumnya
	* data.Back() = mengambil data terakhir
	 */

	for e := data.Front(); e != nil; e = e.Next() {
		fmt.Println(e.Value)
	}
}
