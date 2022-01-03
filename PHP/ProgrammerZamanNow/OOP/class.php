<?php
class Person {
  const AUTHOR = "itzmail";
  var $name = "Paijo";
  var $addres;
  var $country;

  function sayHello(?string $name){
    if(is_null($name)){
      echo "Hi, my name is {$this->name}" . PHP_EOL; // akan mengakses variable name yang ada di properties var $name
    } else {
      echo "Hello $name, my name is $this->name" . PHP_EOL;
    }
  }

  function info(){
    echo "AUTHOR : " . self::AUTHOR . PHP_EOL; // keyword self untuk mengakses constanta di dalam class yang sama
  }
}