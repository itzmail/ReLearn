<?php
/**
 * Kadang kita ingin membuat representasi string dari DateTime yang sudah kita buat
 * Hal ini bisa kita lakukan menggunakan function format()
 * Function format() menerima argument berupa format string, ini bisa kita gunakan untuk memanipulasi cara kita menampilkan string format waktu
 * Untuk detailnya kita bisa lihat di Dokumentasi
 */

 $date = new DateTime();
 $string = $date->format('Y-m-d H:i:s');
echo "Waktu saat ini : $string" . PHP_EOL;