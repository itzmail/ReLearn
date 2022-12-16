<?php
/**
 * Kita bisa mengubah timezone melalui file php.ini di folder PHP
 * 
 * Atau kita bisa menggunakan function setTimeZone untuk mengubah timezone DateTime
 */

 $date = new DateTime();
 $date->setTimezone(new DateTimeZone("Asia/Jakarta")); // untuk wilayah timezone bisa lihat di dokumentasi

 var_dump($date);