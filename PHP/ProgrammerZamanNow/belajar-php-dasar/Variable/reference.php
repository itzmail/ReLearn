<?php
/*
* Reference adalah mengakses variable yang sama dengan nama variable yang berbeda 
* Reference di PHP tidak sama dengan yang ada di bahasa C/C++ yang memiliki fitur pointer
* Analogi reference itu seperti file, jika variable adalah file dan value nya adalah isi maka reference itu sama saja membuat shortcut di windows dan sama juga membuat alias di linux/mac
* Saat kita mengubah isi value dari reference maka hal tersebut juga mengubah value di variabel aslinya
* Untuk membuat reference terhadap variable, kita bisa menggunakan karakter & 
*
* ASSIGN BY Reference
* Pertama, PHP Reference bisa memungkinkan kita bisa membuat beberapa variable menuju ke value yang sama*/

$name = "Eko";

$otherName = &$name; // value dari othername adalah Eko
$otherName = "Budi"; // value dari variable name berubah menjadi Budi

echo $name . PHP_EOL;

/*
* Pass by reference
* Mengirim data ke function menggunakan reference*/

function increment(int &$value)
{
  $value++;
}

$counter = 1;
increment($counter);
increment($counter);

echo $counter . PHP_EOL; 

/*
* Returning Reference 
* PHP juga bisa mengembalikan reference pada function 
* Namun hati-hati, gunakan fitur jika memang ada alasanya, karena fitur ini bisa membingungkank*/

function &getValue() {
  static $value = 100;
  return $value;
}

$a = &getValue(); // variable a diisi dari static $value
$a = 240; // statice $value berubah nilai nya menjadi 240

$b = &getValue(); // hanya untuk menampilkan saja 
echo $b;
