<?php 
/**
 * Jika constructor adalah function yang akan dipanggil pertama kali ketika object dibuat
 * Destructor adalah function yang akan dipanggil ketika object dihapus dari memory
 * Biasanya ketika object tersebut sudah tidak lagi digunakan atau ketika aplikasi akan mati 
 * Untuk membuat function destructor, kita tidak boleh menambahkan argument atau param
 * Dalam penggunaan sehari-hari, ini cocok untuk menutup koneksi ke database atau menutup proses menulis ke file, SEHINGGA TIDAK TERJADI MEMORY LEAK
 */

 require_once './class.php';

 $ismail = new Person();

 echo "Program Selesai" . PHP_EOL;