# CONTEXT

- Context merupakan sebuah data yang membawa value, sinyal cancel, sinyal timeout dan sinyal deadline
- Context biasanya dibuat per request (misal setiap ada request masuk ke server web melalui http request)
- Context digunakan untuk mempermudah kita meneruskan value, dan sinyal antar proses

### ****Kenapa Context Perlu Dipelajari?****

- Context di Golang biasa digunakan untuk mengirim data request atau sinyal ke proses lain
- Dengan menggunakan context, ketika kita ingin membatalkan semua proses, kita cukup mengirim sinyal ke context, maka secara otomatis semua proses akan dibatalkan
- Hampir semua bagian di Golang memanfaatkan context, seperti database, http server, http client, dan lain-lain
- Bahkan di Google sendiri, ketika menggunakan Golang, context wajib digunakan dan selalu dikirim ke setiap function yang dikirim

### Cara Kerja Context

![Screenshot 2023-09-25 at 20.47.02.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9c936ff6-1acb-4784-9742-4ed60015634e/42326616-7200-425b-bc6f-211382f12c4e/Screenshot_2023-09-25_at_20.47.02.png)

- Context direpresentasikan di dalam sebuah interface Context
- interface Context terdapat dalam package context
- [package.Context](https://golang.org/pkg/context/)

## Membuat Context

- Karena Context adalah sebuah interface, untuk membuat context kita butuh sebuah struct yang sesuai dengan kontrak interface Context
- Namun kita tidak perlu membuatnya secara manual
- Di Golang package context terdapat function yang bisa kita gunakan untuk membuat Context

### ****Function Membuat Context****

| Function | Keterangan |
| --- | --- |
| context.Background() | Membuat context kosong. Tidak pernah dibatalkan, tidak pernah timeout, dan tidak memiliki value apapun. Biasanya digunakan di main function atau dalam test, atau dalam awal proses request terjadi. |
| context.TODO() | Membuat context kosong seperti Background(), namun biasanya menggunakan ini ketika belum ‘jelas’ context apa yang ingin digunakan |

```go
import (
	"context"
	"fmt"
	"testing"
)

func TestContext(t *testing.T) {
	backaground := context.Background()
	fmt.Println(backaground)

	todo := context.TODO()
	fmt.Print(todo)
}
```

## ****Parent dan Child Context****

- Context menganut konsep parent dan child
- Artinya, saat kita membuat context, kita bisa membuat child context dari context yang sudah ada
- Parent context bisa memiliki banyak child, namun child hanya bisa memiliki satu parent context
- Konsep ini mirip dengan pewarisan di pemrograman berorientasi object

### ****Diagram Parent dan Child Context****

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9c936ff6-1acb-4784-9742-4ed60015634e/1d1c22ff-5d2e-4eac-8bb2-d1e32bd59d52/Untitled.png)

### ****Hubungan Antara Parent dan Child Context****

- Parent dan Child context akan selalu terhubung
- Saat nanti kita melakukan misal pembatalan context A, maka semua child dan sub child dari context A akan ikut dibatalkan
- Namun jika misal kita membatalkan context B, hanya context B dan semua child dan sub child nya yang dibatalkan, parent context B tidak akan ikut dibatalkan
- Begitu juga nanti saat kita menyisipkan data ke dalam context A, semua child dan sub child nya bisa mendapatkan data tersebut
- Namun jika kita menyisipkan data di context B, hanya context B dan semua child dan sub child nya yang mendapat data, parent context B tidak akan mendapat data

### Context itu Immutable

- Context merupakan object yang Immutable, artinya setelah Context dibuat, dia tidak bisa diubah lagi
- Ketika kita menambahkan value ke dalam context, atau menambahkan pengaturan timeout dan yang lainnya, secara otomatis akan membentuk child context baru, bukan merubah context tersebut

## Context With Value

- Pada saat awal membuat context, context tidak memiliki value
- Kita bisa menambah sebuah value dengan data Pair (key - value) ke dalam context
- Saat kita menambah value ke context, secara otomatis akan tercipta child context baru, artinya original context nya tidak akan berubah sama sekali
- Untuk membuat menambahkan value ke context, kita bisa menggunakan function **context.WithValue(parent, key, value)**

```go
func TestContextWithValue(t *testing.T) {
	contextA := context.Background()

	contextB := context.WithValue(contextA, "b", "B")
	contextC := context.WithValue(contextA, "c", "C")

	contextD := context.WithValue(contextB, "d", "D")
	contextE := context.WithValue(contextB, "e", "E")

	fmt.Println(contextA)
	fmt.Println(contextB)
	fmt.Println(contextC)
	fmt.Println(contextD)
	fmt.Println(contextE)

	// Get Value
	fmt.Println(contextD.Value("b")) // dapat dari context b itu sendiri
	fmt.Println(contextD.Value("c")) // tidak dapat karena beda parent

	// konsep ambil value di context itu mengambil ke atas bukan ke bawah
}
```