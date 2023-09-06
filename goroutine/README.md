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
* Jadi mengerjakan sesuatu ganti-gantian meskupun pekerjaannya belum selesai

##### Analogi Concurency
Saat kita makan, lalu minum, lalu makan lagi. begitu seterusnya

### CPU-bound
* Banyak algoritma dibuat yang hanya membutuhkan CPU untuk menjalankannya. Algortima jenis ini biasanya sangat tergantung dengan kecepatan CPU
* Contoh yang paling populer adalah Machine learning, karena membutuhkan GPU yang memiliki core lebih banyak dari CPU
* Jenis algoritma seperti ini tidak ada benefitnya menggunakan Concurrency Programming, namun bisa dibantu dengan implementasi Parallel Programming


### I/O-bound
* I/O-bound adalah kebalikan dari sebelumnya, dimana biasanya algoritma atau aplikasinya sangat tergantung dengan kecepatan input output devices yang digunakan.
* Contoh : aplikasi seperti membaca data dari file, database, dll
* Kebanyakan saat ini, biasanya kita akan membuat aplikasi jenis seperti ini
* Aplikasi jenis I/O-bound, walaupun bisa terbantu dengan implementasi Prallel Programming, tetapi benefitnya lebih baik menggunakan Concurrency Programming
* Bayangkan kita membaca data dari database, dan Thread harus menunggu 1 detik untuk mendapat balasan dari database. padahal waktu 1 detik itu jika menggunakan Concurrency Programming bisa digunakan untuk melakukan hal lain lagi