<?php
/**
 * Jika di dalam class (misal di class terdapat function dan kita ingin mengakses constant di dalam function) kita ingin mengakses constant, kita perlu mengakses menggunakan NamaClass::NAMA_CONSTANT;
 * Namun jika di dalam class yang sama, kita bisa menggunakan kata kunci self untuk mempermudah;
 */

require './class.php';

$person = new Person();

$person->info();