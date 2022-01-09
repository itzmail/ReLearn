<?php
/*
* Anonymous function dalam php disebut juga closure
* Biasanya function ini digunakan sebagai argument atau sebgai value di variable
* Anonymous function membuat kita bisa mengirim function sebagai argument di function lainnya
* */

// Anonymous function sebagai value dari variable
$sayHello = function (string $name) {
  echo "Hello $name" . PHP_EOL;
};

$sayHello("Ismail");
$sayHello("Nura");

/*Anonymous function Sebagai Argument*/

function sayGoodBye(string $name, $filter) {
  $finalName = $filter($name);
  echo "GoodBye $finalName". PHP_EOL; 
}

sayGoodBye("Ismail", function (string $name) {
  return strtoupper($name);
});

/*Mengakses variable diluar Anonymous function
* 
* Secara default anonymous function tidak bisa mengakses variable diluar function 
* Untuk bisa mengakses variable di luar function maka perlu menggunaka kata "use"
* 
* Jadi bila tidak pakai use maka variabel tersebut akan terbaca undefined
* */

$nmDepan = "Ismail";
$nmBelakang = "Alam";

$greetings = function () use ($nmDepan, $nmBelakang) {
  echo "Hello $nmDepan $nmBelakang" . PHP_EOL;
};

$greetings();
