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