
# Belajar Golang Rest API

Diary ini adalah implementasi sederhana dari REST API menggunakan bahasa pemrograman Go (Golang). Proyek ini mencakup berbagai operasi CRUD (Create, Read, Update, Delete) untuk entitas kategori.

## Struktur Proyek

- `main.go`: File utama yang menjalankan aplikasi.
- `controller/`: Berisi logika untuk menangani HTTP request dan response.
- `service/`: Berisi logika bisnis dan implementasi dari berbagai layanan.
- `repository/`: Berisi logika untuk berinteraksi dengan database.
- `model/`: Berisi definisi dari berbagai model data yang digunakan dalam aplikasi.
- `config/`: Berisi konfigurasi aplikasi seperti koneksi database.
- `middleware/`: Berisi middleware yang digunakan dalam aplikasi.

## Instalasi

1. Clone repository ini:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Pastikan Anda telah menginstal Go di mesin Anda. Anda dapat mengunduhnya dari [situs resmi Go](https://golang.org/dl/).

3. Inisialisasi modul Go:
    ```sh
    go mod tidy
    ```

4. Konfigurasi database di file `config/config.go`.

## Menjalankan Aplikasi

Untuk menjalankan aplikasi, gunakan perintah berikut:
```sh
go run main.go
```

Aplikasi akan berjalan pada port yang telah dikonfigurasi (misalnya, `localhost:8080`).

## Endpoint API

Berikut adalah daftar endpoint yang tersedia dalam API ini:

- `POST /categories`: Membuat kategori baru.
- `GET /categories`: Mendapatkan daftar semua kategori.
- `GET /categories/{id}`: Mendapatkan detail kategori berdasarkan ID.
- `PUT /categories/{id}`: Memperbarui kategori berdasarkan ID.
- `DELETE /categories/{id}`: Menghapus kategori berdasarkan ID.

## Contoh Request dan Response

### Membuat Kategori

**Request:**
```sh
POST /categories
Content-Type: application/json

{
    "name": "Kategori Baru"
}
```

**Response:**
```sh
HTTP/1.1 201 Created
Content-Type: application/json

{
    "id": 1,
    "name": "Kategori Baru"
}
```

### Mendapatkan Daftar Kategori

**Request:**
```sh
GET /categories
```

**Response:**
```sh
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": 1,
        "name": "Kategori Baru"
    }
]
```

## Pengujian

Untuk menjalankan pengujian, gunakan perintah berikut:
```sh
go test ./...
```

source code https://github.com/itzmail/MyEdu_Center/tree/golang/go-rest-api