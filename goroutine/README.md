## Concurrency dan Parallel Programming

### Intro

#### Parallel Programming

- Saat ini kita hidup di era multicore
- Semakin cangginh perangkat kreas, maka software pun akan mengikuti, dimana sekarang kita bisa dengan mudah membuat proses parallel di aplikasi
- Parallel programming sederhananya adalah memecahkan suatu masalah dengan cara membaginya menjadi yang lebih kecil dan dijalankan secara bersamaan pada waktu yang berdamaan pula

#### Contoh

- Menjalankan beberapa aplikasi sekaligus di OS kita
- Beberapa koki menyiapkan di restoran, dimana tiap koki membuat makanan masing-masing

#### Process vs Thread

| Process                                       | Thread                                                     |
| --------------------------------------------- | ---------------------------------------------------------- |
| Process adalah sebuah eksekusi program        | Thread adalah segmen dari process                          |
| Process mengkonsumsi memory besar             | Thread menggunakan memory kecil                            |
| Process saling terisolasi dengan process lain | Thread bisa saling berhubungan jika dalam prcess yang sama |
| Process lama untuk dijalankan dihentikan      | Thread cepat untuk dijalankan dan dihentikan               |

#### Concurency Programming
* Berbeda dengan paralel (menjalankan beberapa pekerjaan secara bersamaan), concurrency adalah menjalankan beberapa pekerjaan `secara bergantian`, waktunya tidak bersamaan
* Dalam parallel kita biasanya membutuhkan banyak Thread, sedangkan dalam concurrency, kita hanya membutuhkan sedikit Thread

## Pengenalan Goroutine
* Goroutine adalah sebuah thread ringan yang dikelola oleh Go Runtime
* Ukuran Goroutine sangat kecil, sekitar 2kb, jauh lebih kecil dibandingkan Thread yang bisa sampai 1mb atau 1000Kb.
* Namun tidak seperti thread yang berjalan parallel, goroutine berjalan secara *concurrent*

### Cara Kerja Goroutine
* Sebenarnya, Goroutinde dijalankan oleh Go Scheduler dalam thread, dimana jumlah thread nya semabyak GOMAXPROCS (biasanya sejumlah core CPU)
* Jadi sebenarnya tidak bisa dibilang Goroutine itu pengganti Thread, karena Goroutine sendiri berjalan di atas Thread
* Namun yang mempermudah kita dalah, kita tidapk perlu melakukan manajemen thread, karena sudah di atur oleh Go Scheduler

  *  G: Goroutine
  *  M: Machine (thread)
  *  P: Processor

* Intinya ngga usah bingun dengan Go Scheduler, sudah di setting otomatis. Yang perlu diperhatikan sekarang Go Routine

#### Membuat Goroutine
* Kita hanya cukup menambahkan perintah `go` semeblum memanggil function yang akan kita jalankan dalma goroutine
* SEbuah function kita jalankan dalam goroutine, function tersebut akan mberjalan secara asnychronouse, artinya tidak akan ditunggu sampa fucntion tersebut selesai