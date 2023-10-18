# GOLANG DATABASE

<aside>
❗ ****Sebelum Belajar****

- Go-Lang Dasar
- Go-Lang Modules
- Go-Lang Unit Test
- Go-Lang Goroutines
- Go-Lang Context
    - https://www.udemy.com/course/pemrograman-go-lang-pemula-sampai-mahir/?referralCode=C9C831DC7A42D8714259
- MySQL
    - https://www.udemy.com/course/database-mysql-pemula-sampai-mahir/?referralCode=8881586CE8D7225F0624
</aside>

## Pengenalan Package Database

- Bahasa pemrograman Go-Lang secara default memiliki sebuah package bernama database
- Package database adalah package yang berisikan kumpulan standard interface yang menjadi standard untuk berkomunikasi ke database
- Hal ini menjadikan kode program yang kita buat untuk mengakses jenis database apapun bisa menggunakan kode yang sama
- Yang berbeda hanya kode SQL yang perlu kita gunakan sesuai dengan database yang kita gunakan

### Cara kerja Package Database

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9c936ff6-1acb-4784-9742-4ed60015634e/d36ef265-4f75-48ee-bf6d-f90f6f40a3ea/Untitled.png)

## Database Driver

- Sebelum kita membuat kode program menggunakan database di Go-Lang, terlebih dahulu kita wajib menambahkan driver database nya
- Tanpa driver database, maka package database di Go-Lang tidak mengerti apapun, karena hanya berisi kontrak interface saja
- https://golang.org/s/sqldrivers

install di package https://github.com/go-sql-driver/mysql/

```bash
$ go get -u github.com/go-sql-driver/mysql
```

### Import Package

```go
import (
	"testing"

	_ "github.com/go-sql-driver/mysql" // kasing (_ ) agar tidak error, dan kita hanya uji coba init database saja
)
```

## Membuat Koneksi di Database

- Hal yang pertama akan kita lakukan ketika membuat aplikasi yang akan menggunakan database adalah melakukan koneksi ke database nya
- Untuk melakukan koneksi ke databsae di Golang, kita bisa membuat object **sql.DB** menggunakan function **sql.Open(driver, dataSourceName)**
- Untuk menggunakan database MySQL, kita bisa menggunakan driver “mysql”
- Sedangkan untuk dataSourceName, tiap database biasanya punya cara penulisan masing-masing, misal di MySQL, kita bisa menggunakan dataSourceName seperti dibawah ini :
    - **username:password@tcp(host:port)/database_name**
- Jika object sql.DB sudah tidak digunakan lagi, disarankan untuk menutupnya menggunakan function Close()

```go
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
```

## Database Pooling

- sql.DB di Golang sebenarnya bukanlah sebuah koneksi ke database
- Melainkan sebuah pool ke database, atau dikenal dengan konsep Database Pooling
- Di dalam sql.DB, Golang melakukan management koneksi ke database secara otomatis. Hal ini menjadikan kita tidak perlu melakukan management koneksi database secara manual
- Dengan kemampuan database pooling ini, kita bisa menentukan jumlah minimal dan maksimal koneksi yang dibuat oleh Golang, sehingga tidak membanjiri koneksi ke database, karena biasanya ada batas maksimal koneksi yang bisa ditangani oleh database yang kita gunakan

### Pengaturan Database Pooling

| Method | Keterangan |
| --- | --- |
| (DB) SetMaxIdleConns(number) | Pengaturan berapa jumlah koneksi minimal yang dibuat |
| (DB) SetMaxOpenConns(number) | Pengaturan berapa jumlah koneksi maksimal yang dibuat |
| (DB) SetConnMaxIdleTime(duration) | Pengaturan berapa lama koneksi yang sudah tidak digunakan akan dihapus |
| (DB) SetConnMaxLifetime(duration) | Pengaturan berapa lama koneksi boleh digunakan |

```go
package golangdatabase

import (
	"database/sql"
	"time"
)

func GetConnection() *sql.DB {
	db, err := sql.Open("mysql", "root:@tcp(localhost:3306)/golang_db")

	if err != nil {
		panic(err)
	}

	// Wajib setting pool connection
	db.SetMaxIdleConns(10)
	db.SetMaxOpenConns(100)
	db.SetConnMaxIdleTime(5 * time.Minute)
	db.SetConnMaxLifetime(60 * time.Minute)

	return db
}
```

## ****Eksekusi Perintah SQL****

- Saat membuat aplikasi menggunakan database, sudah pasti kita ingin berkomunikasi dengan database menggunakan perintah SQL
- Di Golang juga menyediakan function yang bisa kita gunakan untuk mengirim perintah SQL ke database menggunakan function **(DB) ExecContext(context, sql, params)**
- Ketika mengirim perintah SQL, kita butuh mengirimkan context, dan seperti yang sudah pernah kita pelajari di course Golang Context, dengan context, kita bisa mengirim sinyal cancel jika kita ingin membatalkan pengiriman perintah SQL nya

```go
package golangdatabase

import (
	"context"
	"fmt"
	"testing"
)

func TestExecSql(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	script := "INSERT INTO customer(name) VALUES('Budi')"
	_, err := db.ExecContext(ctx, script)

	if err != nil {
		panic(err)
	}

	fmt.Println("Success insert new customer")
}
```

## Query SQL

- Untuk operasi SQL yang tidak membutuhkan hasil, kita bisa menggunakan perintah Exec, namun jika kita membutuhkan result, seperti SELECT SQL, kita bisa menggunakan function yang berbeda
- Function untuk melakukan query ke database, bisa menggunakan function **(DB) QueryContext(context, sql, params)**

```go
func TestQuerySql(t *testing.T) {
	db := GetConnection()

	ctx := context.Background()
	script := "SELECT id, name FROM customer"
	rows, err := db.QueryContext(ctx, script)

	if err != nil {
		panic(err)
	}

	defer rows.Close()
}
```

### ROWS

- Hasil Query function adalah sebuah data structs sql.Rows
- Rows digunakan untuk melakukan iterasi terhadap hasil dari query
- Kita bisa menggunakan function **(Rows) Next() (boolean)** untuk melakukan iterasi terhadap data hasil query, jika return data false, artinya sudah tidak ada data lagi didalam result
- Untuk membaca tiap data, kita bisa menggunakan **(Rows) Scan(columns...)**
- Dan jangan lupa, setelah menggunakan Rows, jangan lupa untuk menutupnya menggunakan **(Rows) Close()**

```go
for rows.Next() {
		var id int32
		var name string

		err := rows.Scan(&id, &name)
		if err != nil {
			panic(err)
		}
		fmt.Println("Id:", id, "Name:", name)
	}

	defer rows.Close()
```

## Tipe Data Column

- Sebelumnya kita hanya membuat table dengan tipe data di kolom nya berupa VARCHAR
- Untuk VARCHAR di database, biasanya kita gunakan String di Golang
- Bagaimana dengan tipe data yang lain?
- Apa representasinya di Golang, misal tipe data timestamp, date dan lain-lain

### ****Mapping Tipe Data****

| Tipe Data Database | Tipe Data Golang |
| --- | --- |
| VARCHAR, CHAR | string |
| INT, BIGINT | int32, int64 |
| FLOAT, DOUBLE | float32, float64 |
| BOOLEAN | bool |
| DATE, DATETIME, TIME, TIMESTAMP | time.Time |

Kode select ini **best practicenya** select langsung sama nama columnya

```go
ctx := context.Background()
	script := "SELECT id, name, email, balance, rating, birth_date, married, created_at FROM customer"
	rows, err := db.QueryContext(ctx, script)

	if err != nil {
		panic(err)
	}
```

### Menghadapi Error-Erro yang mungkin terjadi

- Error untuk tipe data time
    - Secara default, Driver MySQL untuk Golang akan melakukan query tipe data DATE, DATETIME, TIMESTAMP menjadi [ ]byte / [ ]uint8. Dimana ini bisa dikonversi menjadi String, lalu di parsing menjadi time.Time
    - Namun hal ini merepotkan jika dilakukan manual, kita bisa meminta Driver MySQL untuk Golang secara otomatis melakukan parsing dengan menambahkan parameter parseTime=true
        
        ```go
        dataSource := "root:@tcp(localhost:3306)/golang_db?parseTime=true"
        	db, err := sql.Open("mysql", dataSource)
        	if err != nil {
        		panic(err)
        	}
        ```
        

### Nullable Type

- Golang database tidak mengerti dengan tipe data NULL di database
- Oleh karena itu, khusus untuk kolom yang bisa NULL di database, akan jadi masalah jika kita melakukan Scan secara bulat-bulat menggunakan tipe data representasinya di Golang

### Tipe-Tipe Data Nullable

| Tipe Data Golang | Tipe Data Nullable |
| --- | --- |
| string | database/sql.NullString |
| bool | database/sql.NullBool |
| float64 | database/sql.NullFloat64 |
| int32 | database/sql.NullInt32 |
| int64 | database/sql.NullInt64 |
| time.Time | database/sql.NullTime |

```go
func TestQuerySqlComplex(t *testing.T) {
	db := GetConnection()

	ctx := context.Background()
	script := "SELECT id, name, email, balance, rating, birth_date, married, created_at FROM customer"
	rows, err := db.QueryContext(ctx, script)

	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var id int32
		var name string
		var email sql.NullString
		var balance int32
		var rating float64
		var createdAt time.Time
		var birthDate sql.NullTime
		var married bool

		err := rows.Scan(&id, &name, &email, &balance, &rating, &birthDate, &married, &createdAt)
		if err != nil {
			panic(err)
		}

		fmt.Println("====================")
		fmt.Println("Id:", id)
		fmt.Println("Name:", name)
		if email.Valid {
			fmt.Print("Email:", email.String)
		}
		fmt.Println("Balance:", balance)
		fmt.Println("Rating:", rating)
		if birthDate.Valid {
			fmt.Println("Birth Date:", birthDate.Time)
		}
		fmt.Println("Married:", married)
		fmt.Println("Created At:", createdAt)
	}

	defer rows.Close()
}
```

## SQL dengan Parameter

- Sekarang kita sudah tahu bahaya nya SQL Injection jika menggabungkan string ketika membuat query
- Jika ada kebutuhan seperti itu, sebenarnya function Exec dan Query memiliki parameter tambahan yang bisa kita gunakan untuk mensubtitusi parameter dari function tersebut ke SQL query yang kita buat.
- Untuk menandai sebuah SQL membutuhkan parameter, kita bisa gunakan karakter ? (tanda tanya)

```go
func TestSqlInjectionSafe(t *testing.T) {
	db := GetConnection()

	ctx := context.Background()

	username := "admin"
	password := "admin"

	script := "SELECT username FROM user WHERE user.username = ? AND user.password = ? LIMIT 1"
	rows, err := db.QueryContext(ctx, script, username, password)

	if err != nil {
		panic(err)
	}

	if rows.Next() {
		var username string
		err := rows.Scan(&username)
		if err != nil {
			panic(err)
		}
		fmt.Println("Success Login", username)
	} else {
		fmt.Println("Failed Login")
	}

	defer rows.Close()
}

func TestExecSqlSafe(t *testing.T) {
	db := GetConnection()
	defer db.Close()

	ctx := context.Background()

	username := "jos"
	password := "gandos"

	script := "INSERT INTO user(username, password) VALUES(?, ?)"
	_, err := db.ExecContext(ctx, script, username, password)

	if err != nil {
		panic(err)
	}

	fmt.Println("Success insert new user")
}
```