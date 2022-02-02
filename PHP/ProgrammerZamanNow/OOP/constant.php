<?php
require_once './class.php';

define("APPLICATION", "Belajar PHP OOP");
const APP_VERSION = "1.0.0";

echo APPLICATION . PHP_EOL;
echo APP_VERSION . PHP_EOL; 

// Class constanta
$constant = new Person();
echo $constant->name . PHP_EOL; // ini memanggil properties karena isinya mutable jadi untuk membanggil constanta berbeda

echo Person::AUTHOR . PHP_EOL; // dibuat seperti ini karena constanta dalam class sifatnya melekat