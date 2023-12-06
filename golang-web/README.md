# Golang Web Server

- Server adalah struct yang terdapat di package net/http yang digunakan sebagai representasi Web Server di Go-Lang
- Untuk membuat web, kita wajib membuat Server
- Saat membuat data Server, ada beberapa hal yang perlu kita tentukan, seperti host dan juga port tempat dimana Web kita berjalan
- Setelah membuat Server, kita bisa menjalankan Server tersebut menggunakan function ListenAndServe()

```go
func TestServer(t *testing.T) {
	server := http.Server{
		Addr: "localhost:8080",
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
```

# Handler

- Server hanya bertugas sebagai Web Server, sedangkan untuk menerima HTTP Request yang masuk ke Server, kita butuh yang namanya Handler
- Handler di Go-Lang di representasikan dalam interface, dimana dalam kontraknya terdapat sebuah function bernama ServeHTTP() yang digunakan sebagai function yang akan di eksekusi ketika menerima HTTP Request

## ****HandlerFunc****

- Salah satu implementasi dari interface Handler adalah HandlerFunc
- Kita bisa menggunakan HandlerFunc untuk membuat function handler HTTPfunc

```go
TestHandler(t *testing.T) {
	var handler http.HandlerFunc = func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello World")
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: handler,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
```

# Server Mux

- Saat membuat web, kita biasanya ingin membuat banyak sekali endpoint URL
- HandlerFunc sayangnya tidak mendukung itu
- Alternative implementasi dari Handler adalah ServeMux
- ServeMux adalah implementasi Handler yang bisa mendukung multiple endpoint

```go
func TestMux(t *testing.T) {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Hello World")
	})

	mux.HandleFunc("/hi", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Hi World")
	})

	mux.HandleFunc("/bye", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Bye World")
	})

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: mux,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
```

### URL Pattern

- URL Pattern dalam ServeMux sederhana, kita tinggal menambahkan string yang ingin kita gunakan sebagai endpoint, tanpa perlu memasukkan domain web kita
- Jika URL Pattern dalam ServeMux kita tambahkan di akhirnya dengan garis miring, artinya semua url tersebut akan menerima path dengan awalan tersebut, misal /images/ artinya akan dieksekusi jika endpoint nya /images/, /images/contoh, /images/contoh/lagi
- Namun jika terdapat URL Pattern yang lebih panjang, maka akan diprioritaskan yang lebih panjang, misal jika terdapat URL /images/ dan /images/thumbnails/, maka jika mengakses /images/thumbnails/ akan mengakses /images/thumbnails/, bukan /images

```go
 	mux.HandleFunc("/hi/josgandos", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Hi Jos Gandos World")
	})

	mux.HandleFunc("/bye", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Bye World")
	})
```

### Request
* Request adalah struct yang merepresentasikan HTTP Request yang dikirim oleh Web Browser 
* Semua informasi request yang dikirim bisa kita dapatkan di Request 
* Seperti, URL, http method, http header, http body, dan lain-lain

```go
func TestRequest(t *testing.T) {
	var handler http.HandlerFunc = func(writter http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writter, request.Method)
		fmt.Fprintln(writter, request.RequestURI)
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: handler,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
```

### HTTP Test

* Request adalah struct yang merepresentasikan HTTP Request yang dikirim oleh Web Browser 
* Semua informasi request yang dikirim bisa kita dapatkan di Request 
* Seperti, URL, http method, http header, http body, dan lain-lain


```go
import (
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func HelloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World")
}

func TestHttp(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/hello", nil)
	recorder := httptest.NewRecorder()

	HelloHandler(recorder, request)

	response := recorder.Result()
	body, err := io.ReadAll(response.Body)

	if err != nil {
		panic(err)
	}

	bodyString := string(body)
	fmt.Println(bodyString)
}
```

## Query Parameter

* Query parameter adalah salah satu fitur yang biasa kita gunakan ketika membuat web
* Query parameter biasanya digunakan untuk mengirim data dari client ke server
* Query parameter ditempatkan pada URL
* Untuk menambahkan query parameter, kita bisa menggunakan ?nama=value pada URL nya

### url.URL
* Dalam parameter Request, terdapat attribute URL yang berisi data url.URL
* Dari data URL ini, kita bisa mengambil data query parameter yang dikirim dari client dengan menggunakan method Query() yang akan mengembalikan map

