<?php
/**
 * Kadang kita hanya ingin memanipulasi waktu dan tanggal sebgian saja, misal hanya menambah 1 tahun, atau mengurangi beberapa hari
 * Hal ini bisa dilakukan dengan function add milik DateTime
 * Namun function add tersebut menerima parameter berupa DateInterval
 * Saat menggunakan DateInterval duration, kita perlu menentukan berapa banyak kita menambah interval
 * Untuk pembuatan duration, harus diawali dengan karakter P yang artinya period. ini merupakan standar dari PHP
 * 
 * Detilnya bisa lihat di dokumentasi
 */

 $dateTime = new DateTime();
 $dateTime->setDate(2021, 02, 15);
 
 // kita ubah tahunnya saja
 $dateTime->add(new DateInterval("P2Y")); // seperti yang kubilang sebelumnya bahwa harus diawali dengan P dan huruf y bisa dilihar di dokumentasi PHP

 
 // Mengurangi bulan
 $minusOneMonth = new DateInterval("P2M");
 $minusOneMonth->invert = true;
 
 $dateTime->add($minusOneMonth);
 
 var_dump($dateTime);