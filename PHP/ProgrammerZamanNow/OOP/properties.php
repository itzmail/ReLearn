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

/*Properties Type Declaration
* Untuk menambahkan type declaration, kita bisa tambahkan setelah kata kunci var di properties*/

class Data {
  var int $age;
  var string $name;
}

$data = new Data();
$data->age = 13;
$data->name = "Jawadi";
var_dump($data);

/*Default Properties Value
* Sama seperti variable, di properties juga kita bisa langsung mengisi valuenya
* Ini mirip seperti default value, jadi jika tidak diubah di object, maka properties akan memiliki value tersbut*/

class Bioma {
  var string $live = "Coral";
  var string $thing = "Bekicot";
}

$bioma = new Bioma();
$bioma->live = 'Seeweed';
var_dump($bioma);

/*Nullable Properties
* Saat menambahkan type declaration di properties atau di function argument, maka secara otomatis kita tidak bisa mengirim data null ke dalam properties atau function argument tersebut
* PHP 7.4 dikenalkan nullable type, jadi kita bisa mengirim data null ke properties atau function arguments
* Caranya sebelum type declaration nya, kita bisa tambahkan tanda ?*/

class Nullable {
  // var int $total = null; kalau seperti ini artinya tidak boleh null, akan muncul syntax error
  var ?string $name = null; // value dari properties boleh null
}

$nullable = new Nullable();
var_dump($nullable);
