<?php
/*
* sama halnya dengan string function array function digunakan untuk memanipulasi data array
*
* bisa cek di link ini https://www.php.net/manual/en/ref.array.php*/

$data = [1, 2, 3, 4, 5, 6, 7];
$fruits = ['Lemon', 'Jeruk', 'Apel', 'Belimbing'];

echo "Array_Map" . PHP_EOL;
var_dump(array_map(fn($data) => $data * 2, $data)); // mengedit seluruh data yang ada di array 

echo "Sort terbalik (rewind sort)" . PHP_EOL;
rsort($fruits); // berguna untuk mengurutkan secara descending
var_dump($fruits);

echo "Function untuk memngambil keys saja" . PHP_EOL;
var_dump(array_keys($fruits));

echo 'Function untuk mengambil values saja' . PHP_EOL;
var_dump(array_values($fruits));
