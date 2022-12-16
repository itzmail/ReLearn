<?php
/*
* This Keyword
* Saat kita membuat kode di dalam function di dalam class, kita bisa menggunakan kata kunci this untuk mengakses saat ini
* Misal kadang kita butuh mengakses properties atau function lain di class yang sama*/
require_once "./properties.php";

$person = new Person();
$person -> sayHello(NULL);