# GOPATH

* Sebelumnya saat kita membuat project aplikasi Go-Lang kita belum membahas GOPATH
* GOPATH adalah environment variable yang berisikan lokasi tempat kita menyimpan project dan library Go-Lang
* GOPATH wajib di buat ketika kita mulai membuat aplikasi lebih dari satu file atau butuh menggunakan library dari luar

Teman-teman ada 2 Cara setting gopath

### Windows

Teman-teman setting di set variables

### Macos

Teman-teman setting di .zshrc

```shell
export GOPATH="route-folder/src"
```

## PACKAGE INITIALIZATION

* Saat kita membuat package, kita bisa membuat sebuah function yang akan diakses ketika package kita diakses
* Ini sangat cocok ketika contohnya, jika package kita berisi function-function untuk berkomunikasi dengan database, kita membuat function inisialisasi untuk membuka koneksi ke database
* Untuk membuat function yang diakses secara otomatis ketika package diakases kita cukup membuat function denang nama init