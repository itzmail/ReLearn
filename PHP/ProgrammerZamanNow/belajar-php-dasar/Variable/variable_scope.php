<?php
/*
* Variable Scope adalah zona akses Variable
*
* Global scope 
* variable yang dibuat di luar function memiliki sifat Global
* variable di scope global hanya bisa diakses dari luar function sehingga kita tidak bisa mengakses variable di dalam function 
*
* Local Scope
* Variable yang dibuat di dalam function dan hanya bisa di akses di dalam functio saja
*
* global keyword
* Namun jika kita ingin mengakses variable diluar scope kita bisa menggunakan keyword global*/

$name = "Ismail"; // variable golbal

function sayName() 
{
  global $name; // global keyword
  echo "Hello $name" . PHP_EOL;
}

sayName();

/*
* $GLOBAL variable
* setiap variable yang dibuat di global scope, secara otomatis akan disimpan di dalam array $GLOBAL oleh PHP
* jadi kita bisa menggunakan $GLOBAL variable dengan key nama variablenya dari dalam function jika ingin mengakses global variable
* $GLOBAL adalah variable yang bersifat superglobal, artinya bisa diakses di scope manapun */

// var_dump($GLOBALS);

$age = 89;

function sayAge()
{
  echo "Your age {$GLOBALS['age']}" . PHP_EOL; 
}

sayAge();

/*
* Static Scope
* Secara default local variable itu siklus hidupnya hanya sebatas function nya dieksekusi
* Jika sebuah function selseai dieksekusi, maka siklus hidup local variable nya selesai
* PHP memiliki scope yang bernama Static
* Static scope hanya bisa di set ke local variable
*
* Saat kita membuat sebuah loacl variable menjadi static, maka siklus hidupnya tidak akan berhenti ketika sebuah function selesasi dieksekusi
* Artinya jika function tersebut dieksekusi lagi, maka static variable tersebut akan memiliki value dari sebelumnya*/

function increment() 
{
  // $counter = 1; => hasilnya tetap satu karena merecycle lagi function ini ketika dipanggil
  static $counter = 1; // hasilnya jadi berubah
  echo "Counter = $counter" . PHP_EOL;

  $counter++;
}

increment();  
increment();
