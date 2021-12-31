<?php
/*
* Field/Properties/Attributes adalah data yang bisa kita sisipkan di dalam Object
* Namun sebelum kita bisa memasukkan data di fields, kita harus mendeklarasikan data apa saja yang dimiliki object tersebut di dalam deklarasi class-nya
* Membuat field sama seperti membuat variable, namun ditempatkan di block class, namun diawali dengan kata kunci var*/

class Person {
  var $name;
  var $addres;
  var $country;
}

/*Manipulasi Properties
* fields yang ada di object, bisa kita Manipulasi
* Untuk memanipulasi data field, sama seperti cara pada variable
* Untuk mengakses field, kita butuh keyword (->) setelah nama object dan diikuti nama fields nya*/

$person = new Person();
$person->name = "Ismail";
$person->addres = "Magelang";
$person->country = "Indonesia";

var_dump($person);
echo "Name : {$person->name}" . PHP_EOL; 
echo "Addres : {$person->addres}" . PHP_EOL; 
echo "Country : {$person->country}" . PHP_EOL; 

$person2 = new Person();
$person2->name = "Joka";
$person2->addres = "Ilalang";
$person2->country = "Amerina";

var_dump($person2);
