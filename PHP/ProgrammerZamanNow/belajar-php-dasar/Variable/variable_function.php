<?php
/*
* Variable function adalah kemampuan memanggil sebuah function dari value yang terdapat di sebuah Variable
* untuk memanggilnya $namaVariabel(argument)*/

function foo() {
  echo "Ini dari function foo";
}

$functionName = 'foo'; // stringnya harus sama dengan nama functionnya
$functionName();

function sayHello(string $nama, $filter) {
  $finalName = $filter($nama);
  echo "Hello $nama" . PHP_EOL;
}

sayHello("Ismail", 'strtoupper'); // string to upper untuk membesarkan huruf
sayHello("ALAM", 'strtolower'); // string to lower untuk mengecilkan huruf
