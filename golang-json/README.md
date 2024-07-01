# Pengenalan JSON

- JSON singkatan dari JavaScript Object Notation, merupakan struktur format data yang bentuknya seperti Object di JavaScript
- JSON merupakan struktur format data yang paling banyak digunakan saat kita membuat RESTful API
- Dan pate kelas ini kita akan menggunakan JSON juga
https://www.json.org/json-en.html

### Contoh

```json
{
    "nama": "Eko",
    "umur": 30,
    "alamat": {
        "jalan": "Jl. Anggrek",
        "kota": "Jakarta"
    },
    "hobi": ["Olahraga", "Membaca"]
}

```

## Encode JSON

- Go-Lang telah menyediakan function untuk melakukan konversi data ke JSON, yaitu menggunakan function `json.Marshal(interface{})`
- Karena parameter nya adalah interface{}, maka kita bisa masukan tipe data apapun ke dalam function Marshal

contoh code Encode JSON

```go
package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func logJson(data interface{}) {
	bytes, err := json.Marshal(data)

	if err != nil {
		panic(err)
	}

	fmt.Println(string(bytes))
}

func TestEncode(t *testing.T) {
	logJson("Hello, World!")            // result => "Hello, World!"
	logJson(1)                          // result => 1
	logJson(true)                       // result => true
	logJson([]string{"Hello", "World"}) // result => ["Hello", "World"]
}
```

## JSON Object

- Pada materi sebelumnya kita melakukan encode data seperti string, number, boolean, dan tipe data primitif lainnya
- Walaupun memang bisa dilakukan, karena sesuai dengan kontrak interface{}, namun tidak sesuai dengan kontrak JSON
- Jika mengikuti kontrak json.org, data JSON bentuknya adalah Object dan Array
- Sedangkan value nya baru berupa

## Strutch

- JSON Object di Go-Lang direpresentasikan dengan tipe data Struct
- Dimana tiap attribute di JSON Object merupakan attribute di Struct

```go
package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

type Customer struct {
	FirstName  string
	MiddleName string
	LastName   string
}

func TestJSONObject(t *testing.T) {
	customer := Customer{
		FirstName:  "John",
		MiddleName: "D",
		LastName:   "Doe",
	}

	bytes, err := json.Marshal(customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(string(bytes)) // result => {"FirstName":"John","MiddleName":"D","LastName":"Doe"}
}
```

## Decode JSON

```go
package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestDecodeJSON(t *testing.T) {
	jsonString := `{
	"FirstName":"John",
	"MiddleName":"D",
	"LastName":"Doe",
	"Age":30,
	"Married":true}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}
	err := json.Unmarshal(jsonBytes, customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(customer)            // result => &{John D Doe 30 true}
}

```

## JSON Array

- Selain tipe dalam bentuk Object, biasanya dalam JSON, kita kadang menggunakan tipe data Array
- Array di JSON mirip dengan Array di JavaScript, dia bisa berisikan tipe data primitif, atau tipe data kompleks (Object atau Array)
- Di Go-Lang, JSON Array direpresentasikan dalam bentuk slice
- Konversi dari JSON atau ke JSON dilakukan secara otomatis oleh package json menggunakan tipe data slice

```go
package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestJSONArray(t *testing.T) {
	customer := Customer{
		FirstName:  "John",
		MiddleName: "D",
		LastName:   "Doe",
		Age:        30,
		Married:    true,
		Hobbies:    []string{"Reading", "Swimming"},
	}

	bytes, _ := json.Marshal(customer)

	fmt.Println(string(bytes))
}

func TestJSONArrayDecode(t *testing.T) {
	jsonString := `{
		"FirstName":"John",
		"MiddleName":"D",
		"LastName":"Doe",
		"Age":30,
		"Married":true,
		"Hobbies":["Reading","Swimming"],
		"Address": [
			{
				"Street": "Jl. Merdeka",
				"City": "Jakarta",
				"Country": "Indonesia"
			},
			{
				"Street": "Jl. Sudirman",
				"City": "Jakarta",
				"Country": "Indonesia"
			}	
		]}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}

	err := json.Unmarshal(jsonBytes, customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(customer) // result => &{John D Doe 30 true}
}

func TestJSONArrayComplex(t *testing.T) {
	customer := Customer{
		FirstName:  "John",
		MiddleName: "D",
		LastName:   "Doe",
		Age:        30,
		Married:    true,
		Hobbies:    []string{"Reading", "Swimming"},
		Address: []Address{
			{
				Street:  "Jl. Merdeka",
				City:    "Jakarta",
				Country: "Indonesia",
			},
			{
				Street:  "Jl. Sudirman",
				City:    "Jakarta",
				Country: "Indonesia",
			},
		},
	}

	bytes, _ := json.Marshal(customer)

	fmt.Println(string(bytes))
}

func TestJSONArrayComplexDecode(t *testing.T) {
	jsonString := `{"FirstName":"John","MiddleName":"D","LastName":"Doe","Age":30,"Married":true,"Hobbies":["Reading","Swimming"],"Address":[{"Street":"Jl. Merdeka","City":"Jakarta","Country":"Indonesia"},{"Street":"Jl. Sudirman","City":"Jakarta","Country":"Indonesia"}]}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}
	err := json.Unmarshal(jsonBytes, customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(customer)
}

```

## **JSON Tag**

- Secara default atribut yang terdapat di Struct dan JSON akan di mapping sesuai dengan nama atribut yang sama (case sensitive)
- Kadang ada style yang berbeda antara penamaan atribute di Struct dan di JSON, misal di JSON kita ingin menggunakan snake_case, tapi di Struct, kita ingin menggunakan PascalCase
- Untungnya, package json mendukun Tag Reflection
- Kita bisa menambahkan tag reflection dengan nama json, lalu diikuti dengan atribut yang kita inginkan ketika konversi dari atau ke JSON

```go
package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestJSONTag(t *testing.T) {
	product := Product{
		Id:       "P001",
		Name:     "Indomie",
		Price:    2000,
		ImageUrl: "https://www.indomie.com",
	}

	bytes, _ := json.Marshal(product)

	fmt.Println(string(bytes))
	// result => {"id":"P001","name":"Indomie","price":2000,"image_url":"https://www.indomie.com"}
}

func TestJSONTagDecode(t *testing.T) {
	jsonString := `{
	"id":"P001",
	"name":"Indomie",
	"price":2000,
	"image_url":"https://www.indomie.com"
	}`
	jsonBytes := []byte(jsonString)

	product := &Product{}

	err := json.Unmarshal(jsonBytes, product)

	if err != nil {
		panic(err)
	}

	fmt.Println(product)
	// result => &{P001 Indomie 2000 https://www.indomie.com}
}

```

## JSON Map

- Saat menggunakan JSON, kadang mungkin kita menemukan kasus data JSON nya dynamic
- Artinya atribut nya tidak menentu, bisa bertambah, bisa berkurang, dan tidak tetap
- Pada kasus seperti itu, menggunakan Struct akan menyulitkan, karena pada Struct, kita harus menentukan semua atribut nya
- Untuk kasus seperti ini, kita bisa menggunakan tipe data map[string]interface{}
- Secara otomatis, atribut akan menjadi key di map, dan value menjadi value di map
- Namun karena value berupa interface{}, maka kita harus lakukan konversi secara manual jika ingin mengambil value nya
- Dan tipe data Map tidak mendukung JSON Tag lagi

```go
package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestJSONMapDecode(t *testing.T) {
	jsonString := `{
		"id":"P001",
		"name":"Indomie",
		"price":2000,
		"image_url":"https://www.indomie.com"
	}`
	jsonBytes := []byte(jsonString)

	var result map[string]interface{}
	json.Unmarshal(jsonBytes, &result)

	fmt.Println(result["id"])
	fmt.Println(result["name"])
	fmt.Println(result["price"])
	fmt.Println(result["image_url"])
}

func TestJSONMapEncode(t *testing.T) {
	product := map[string]interface{}{
		"id":        "P001",
		"name":      "Indomie",
		"price":     2000,
		"image_url": "https://www.indomie.com",
	}

	bytes, _ := json.Marshal(product)

	fmt.Println(string(bytes))
	
	// result => {"id":"P001","name":"Indomie","price":2000,"image_url":"https://www.indomie.com"}
}

```

## **Streaming Decoder**

- Sebelumnya kita belajar package json dengan melakukan konversi data JSON yang sudah dalam bentuk variable dan data string atau []byte
- Pada kenyataanya, kadang data JSON nya berasal dari Input berupa io.Reader (File, Network, Request Body)
- Kita bisa saja membaca semua datanya terlebih dahulu, lalu simpan di variable, baru lakukan konversi dari JSON, namun hal ini sebenarnya tidak perlu dilakukan, karena package json memiliki fitur untuk membaca data dari Stream

### **json.Decoder**

- Untuk membuat json Decoder, kita bisa menggunakan function json.NewDecoder(reader)
- Selanjutnya untuk membaca isi input reader dan konversikan secara langsung ke data di Go-Lang, cukup gunakan function Decode(interface{})

```go
package golangjson

import (
	"encoding/json"
	"fmt"
	"os"
	"testing"
)

func TestStreamDecoder(t *testing.T) {

	reader, _ := os.Open("Customer.json")
	decoder := json.NewDecoder(reader)

	customer := &Customer{}
	decoder.Decode(customer)

	fmt.Println(customer)
	// result => &{John D Doe 30 true}
}
```

## **Streaming Encoder**

- Selain decoder, package json juga mendukung membuat Encoder yang bisa digunakan untuk menulis langsung JSON nya ke io.Writer
- Dengan begitu, kita tidak perlu menyimpan JSON datanya terlebih dahulu ke dalam variable string atau []byte, kita bisa langsung tulis ke io.Writer

### json.NewEncoder

- Untuk membuat Encoder, kita bisa menggunakan function json.NewEncoder(writer)
- Dan untuk menulis data sebagai JSON langsung ke writer, kita bisa gunakan function Encode(interface{})

```go
package golangjson

import (
	"encoding/json"
	"os"
	"testing"
)

func TestJsonEncoder(t *testing.T) {
	writter, _ := os.Create("CustomerOut.json")
	encoder := json.NewEncoder(writter)

	customer := &Customer{
		FirstName:  "John",
		MiddleName: "D",
		LastName:   "Doe",
		Age:        30,
		Married:    true,
		Hobbies:    []string{"Reading", "Swimming"},
		Address: []Address{
			{
				Street:  "Jl. Merdeka",
				City:    "Jakarta",
				Country: "Indonesia",
			},
			{
				Street:  "Jl. Sudirman",
				City:    "Jakarta",
				Country: "Indonesia",
			},
		},
	}

	encoder.Encode(customer)
}

```