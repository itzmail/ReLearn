<?php
/*Saat kita membuat class, kita bisa menjadikan sebuah class sebagai abstract class.
* Abstract class artinya, class tersebut tidak bisa dibuat sebagai object secara langsung, hanya bisa diturunkan.
* Untuk membuat sebuah class menjadi abstract, kita bisa menggunakan kata kunci abstract sebelum kata kunci class.
* Sehingga Abstract Class bisa kita gunakan sebagai kontrak child class*/

namespace Data;
abstract class Location{
  public ?string $name_location;
}

// $lc = new Location(); PHP Fatal error:  Uncaught Error: Cannot instantiate abstract class

class City extends Location {} 
class Province extends Location {}

$city = new City();
$city->name_location = "Magelang";
echo $city->name_location . PHP_EOL;

$prov = new Province();
$prov->name_location = "Central Java";
echo $prov->name_location . PHP_EOL;
