package main

/*
	! Package Rin
	* package ini hampir mirip seperti container list
	* Pembedanya kalau list ada awal dan akhir
	* kalau ring, tidak ada ujungnya
*/

import (
	"container/ring"
	"fmt"
	"strconv"
)

func main() {
	var data *ring.Ring = ring.New(5)

	/*
			! Pakai cara di bawah capek
		data.Value = "Data"
		var data2 *ring.Ring = data.Next()

		data2.value = "Kurniawan" */

	for i := 0; i < data.len(); i++ {
		data.Value = "Data " + strconv.FormatInt(int64(i), 10)
		data = data.Next()
	}

	// Menampilkan hasil isi di var data
	data.Do(func(value interface{}) {
		fmt.Println(value)
	})
}
