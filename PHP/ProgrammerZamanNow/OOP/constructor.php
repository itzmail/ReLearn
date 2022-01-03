<?php
/**
 * Saat kita membuat Object, maka kita seperti memanggil sebuah function, karena kita menggunakan kurung()
 * Di dalam class PHP, kita bisa membuat constructor, constructor adalah function yang akan dipanggil saat pertama kali Object dibuat
 * Mirip seperti di function, kita bisa memberi parameter pada constructor
 * Nama constructor di di PHP haruslah __construct() 
 */

<?php
class Person {
  const AUTHOR = "itzmail";
  var $name = "Paijo";
  var $addres;
  var $country;

  /* function __construct(string $name, ?string $addres) { // yang akan dieksekusi pertama, jika kita memberikan paramteter pada function ini, ketika kita eksekusi harus diberikan parameter juga
    $this->name = $name;
    $this->addres = $addres;
  } */

  function __construct() { // yang akan dieksekusi pertama, jika kita memberikan paramteter pada function ini, ketika kita eksekusi harus diberikan parameter juga
    echo "Hallo Dunia" . PHP_EOL;
  }

}

 $person = new Person(); // di object tersebut harus dibuat parameter, JIKA sejak awal pembuat function __constructor kita kasih paramter
 $person->name = "Jintan";
 $person->addres = "Kapal";

 var_dump($person);