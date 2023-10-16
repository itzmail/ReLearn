package golangdatabase

import (
	"database/sql"
	"testing"

	_ "github.com/go-sql-driver/mysql"
)

/*
	tanda  (_) pada saat import diatas itu
	Untuk menyediakan driver untuk database atau layanan lainnya.
	Misalnya, dalam contoh sebelumnya, paket github.com/go-sql-driver/mysql diimport untuk menyediakan driver MySQL untuk Golang.
	Meskipun paket tersebut tidak digunakan dalam program, paket tersebut tetap diperlukan agar program dapat mengakses database MySQL.
*/

func TestOpenConnection(t *testing.T) {
	db, err := sql.Open("mysql", "root:@tcp(localhost:3306)/golang_db")

	if err != nil {
		panic(err)
	}

	defer db.Close()
}
