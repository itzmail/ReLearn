<?php
/*
* Selain class dan interface, di PHP terdapat feature lain bernama trait
* Trait mirip dengan abstract class, kita bisa membuat konkrit function atau abstract function 
* Yang membedakan adalah, di trait bisa kita tambahkan ke dalam class lebih dari satu trait
* Trait mirip seperti extension, dimana kita bisa menambahkan konkirt function ke dalam class dengan trait
* Secara sederhana trait digunakan untuk menyimpan function- function yang bisa digunakan ulan di beberapa class
* Untuk menggunakan trait di clas, kita bisa menggunakan kata kunci use*/

namespace Data\Traits;

trait SayGoodBye
{
  public string $name;

  public function goodBye(?string $name) :void {
    if(is_null($name)) {
      echo "Good bye" . PHP_EOL;
    } else {
      echo "Good bye $name" . PHP_EOL;
    }
  }
}

trait SayHello
{
  public string $name;

  public function hello(?string $name) :void {
    if(is_null($name)) {
      echo "Hello" . PHP_EOL;
    } else {
      echo "Hello $name" . PHP_EOL;
    }
  }
}

class People {
  use SayGoodBye, SayHello;
}
