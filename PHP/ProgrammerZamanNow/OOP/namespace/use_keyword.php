<?php
require_once "./class.php";
require_once "./funconst.php";

// Memanggil secara default

$oop = new Eksekutif\OOP();

echo "Dari function : " . Helper\sayHelp() . PHP_EOL;
echo "Dari constanta : " . Helper\APPLICATION . PHP_EOL;

// Memanggil dengan use keyword
use Eksekutif\OOP;
$OoP = new OOP();
echo "Memenagil properti materi : {$OoP -> materi}" . PHP_EOL;

foreach($OoP -> hobby as $hobi) {
  echo "Memenagil properti hobbi : {$hobi}" . PHP_EOL;
}

use function Helper\sayHelp; 
use const Helper\APPLICATION;

echo "memanggil function dari group Helper : " . sayHelp(). PHP_EOL;

echo "Memanggil constanta dari group Helper : " . APPLICATION . PHP_EOL;
