Docker itu applikasi yang dimana kita bisa menjalankan applikasi di dalam CONTAINER dan itu terisolasi, jadi tidak akan menggangu applikasi lain.

contoh : kita buat aplikasi dan itu menggunakan php 7.4, terus ada lagi aplikasi yang menggunakan php 8 dan itu bisa dilakukan docker hanya dalam 1 OS.

### ada 2 aplikasi Docker : 
1. Docker Client
2. Docker Daemon (Docker Server)

Docker sendiri berjalan di atas sistem linux. jadi bagi pengguna selain Linux harus install linux terlebih dahulu tetapi hal tersebut sudah di handle oleh "Docker Desktop"

### Docker Image
Docker Image itu semacam applikasi installer. jadi kalau kita mau buat project yang membutuhkan Node JS. maka kita install dulu (Image NodeJS), agar kita bisa melkakukan install aplikasi dan depedency-nya.

### Docker Container
  * Jika docker image itu installer, maka docker container itu mirip seperti applikasi hasil installan dari docker image
  * Satu Docker Image bisa digunakan untuk membuat beberapa Docker Container, asalkan nama DOcker COntainer nya berbeda
  * Jika kita sudah membuat DOcker Container, maka Docker Image yang digunakan tidak bisa dihapus, hal ini dikarenakan sebenarnya Docker Container tidak meng-copy isi Docker Image, tapi hanya menggunakannya isinya saja.

  **JADI kalau mau hapus, harus hapus docker containernya**

#### Status Container
  * Saat kita membuat container, secara default container tersebut tidak akan berjalan. jadi harus dijalankan dulu
