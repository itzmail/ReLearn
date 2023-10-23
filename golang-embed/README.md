## Pengenalan Golang Embed

- Sejak Golang versi 1.16, terdapat package baru dengan nama embed
- Package embed adalah fitur baru untuk mempermudah membaca isi file pada saat compile time secara otomatis dimasukkan isi file nya dalam variable

https://golang.org/pkg/embed/

## Cara Embed File

- Untuk melakukan embed file ke variable, kita bisa mengimport package embed terlebih dahulu
- Selajutnya kita bisa tambahkan komentar //go:embed diikuti dengan nama file nya, diatas variable yang kita tuju
- Variable yang dituju tersebut nanti secara otomatis akan berisi konten file yang kita inginkan secara otomatis ketika kode golang di compile
- Variable yang dituju tidak bisa disimpan di dalam function

### Embed File ke String

- Embed file bisa kita lakukan ke variable dengan tipe data string
- Secara otomatis isi file akan dibaca sebagai text dan masukkan ke variable tersebut

```go
package golang_embed

import (
	_ "embed"
	"fmt"
	"testing"
)

//go:embed version.txt
var version string

func TestString(t *testing.T) {
	fmt.Println(version)
}
```

### Embed File ke []byte

- Selain ke tipe data String, embed file juga bisa dilakukan ke variable tipe data []byte
- Ini cocok sekali jika kita ingin melakukan embed file dalam bentuk binary, seperti gambar dan lain-lain

```go
//go:embed my_photo.jpg
var photo []byte

func TestByteImage(t *testing.T) {
	err := ioutil.WriteFile("my_photo_new.jpg", photo, 0644)
	if err != nil {
		panic(err)
	}
}

// Nanti akan muncul photo baru dengan nama my_photo_new.jpg
```

### Embed Multiple Files

- Kadang ada kebutuhan kita ingin melakukan embed beberapa file sekaligus
- Hal ini juga bisa dilakukan menggunakan embed package
- Kita bisa menambahkan komentar //go:embed lebih dari satu baris
- Selain itu variable nya bisa kita gunakan tipe data embed.FS

```go
//go:embed files/a.txt
//go:embed files/b.txt
//go:embed files/c.txt
var files embed.FS

func TestMultipleFiles(t *testing.T) {
	a, _ := files.ReadFile("files/a.txt")
	fmt.Println(string(a))

	b, _ := files.ReadFile("files/b.txt")
	fmt.Println(string(b))

	c, _ := files.ReadFile("files/c.txt")
	fmt.Println(string(c))
}
```

### Patch Matcher

- Selain manual satu per satu, kita bisa mengguakan patch matcher untuk membaca multiple file yang kita inginkan
- Ini sangat cocok ketika misal kita punya pola jenis file yang kita inginkan untuk kita baca
- Caranya, kita perlu menggunakan path matcher seperti pada package function path.Match
- https://golang.org/pkg/path/#Match

```go
//go:embed files/*.txt
var path embed.FS

func TestPathMatcher(t *testing.T) {
	dir, _ := path.ReadDir("files")
	for _, entry := range dir {
		if !entry.IsDir() {
			fmt.Println(entry.Name())
			file, _ := path.ReadFile("files/" + entry.Name())
			fmt.Println(string(file))
		}
	}
}
```

### ****Hasil Embed di Compile****

- Perlu diketahui, bahwa hasil embed yang dilakukan oleh package embed adalah permanent dan data file yang dibaca disimpan dalam binary file golang nya
- Artinya bukan dilakukan secara realtime membaca file yang ada diluar
- Hal ini menjadikan jika binary file golang sudah di compile, kita tidak butuh lagi file external nya, dan bahkan jika diubah file external nya, isi variable nya tidak akan berubah lagi

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/9c936ff6-1acb-4784-9742-4ed60015634e/7481eec7-29d2-4541-8d7b-05d0c6d20bc4/Untitled.png)

```go
package main

import (
	"embed"
	"fmt"
	"io/fs"
	"io/ioutil"
)

//go:embed version.txt
var version string

//go:embed my_photo.jpg
var logo []byte

//go:embed files/*.txt
var path embed.FS

func main() {
	fmt.Println(version)

	err := ioutil.WriteFile("logo_new.jpg", logo, fs.ModePerm)
	if err != nil {
		panic(err)
	}

	dir, _ := path.ReadDir("files")
	for _, entry := range dir {
		if !entry.IsDir() {
			fmt.Println(entry.Name())
			file, _ := path.ReadFile("files/" + entry.Name())
			fmt.Println(string(file))
		}
	}
}
```

Artinya ketika kita menjalankan perintah `go build` maka project tersebut sudah terkompile dan file yang ada di project tersebut tidak ada pengaruh apapun.