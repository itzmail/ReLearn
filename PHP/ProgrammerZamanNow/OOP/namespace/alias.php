<?php
/*Saat kita menggunakan use kita tidak perlu menuliskan namespacenya
* Tapi yang jadi masalaha adalah ketika kita menuliskan nama class misalnya, nama tersebut sama maka akan terjadi conflict
* Maka dari itu kita bisa menggunakan salah satu fitur dari PHP yaitu alias
* Caranya dengan menggunakan as sebagai keyword setelah melakukan use*/

require_once './funconst.php';
require_once './class.php';

use Eksekutif\OOP as OOP1;
use Data\OOP as OOP2;
use function Helper\sayHelp as help;
use const Helper\APPLICATION as app;

$oop1 = new OOP1();
$oop2 = new OOP2();

var_dump($oop1);
var_dump($oop2);

echo "memanggil function help : " . help() . PHP_EOL;
echo "memanggil constanta : " . app . PHP_EOL;
