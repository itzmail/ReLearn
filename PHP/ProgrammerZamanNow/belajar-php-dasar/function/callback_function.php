<?php
/*
* Callback adalah sebuah mekanisme function memanggil function lainnya sesuai dengan yang diberikan di argument
* 
* Di PHP ada cara lain untuk implementasi callback, yaitu menggunakan tipe data callable
*
* Untuk memanggil callback function, kita menggunakan function call_user_func(callable, arguments)
* */

function sayHello(string $name, callable $filter) {
  $finalName = call_user_func($filter, $name); // bentuk lain dari $filter(arguments)
  echo "Hello $finalName" . PHP_EOL;
}

sayHello("Eko", function ($name) {return strtoupper($name);});
sayHello("Ismail", fn($name)=> strtoupper($name));
sayHello("ISmaIL", 'strtoupper');
sayHello("ismail", function (string $name) : string {
  return strtoupper($name);
});
