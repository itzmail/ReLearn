<?php
/**
 * Date Time
 * Biasanya dalam bahasa pemrograman sudah disediakan cara untuk memanipulasi data waktu termasuk di PHP
 * Di PHP, kita bia menggunakan class DateTime untuk memanipulasi data waktu
 * Fungsi untuk memanipulasi waktu ada banyak, bisa lihat di dokumentasi
 * 
 * setTime($hour, $minute, $second) => mengubah waktu DateTime
 * setDate($year, $month, $day) => mengubah tanggal DateTime
 * setTimeStamp($unix TimeStamp) => Mengubah unix timestamp DateTime
 */

$date = new DateTime();
$date->setDate(2022, 01, 01);
$date->setTime(12, 12, 12);

var_dump($date);