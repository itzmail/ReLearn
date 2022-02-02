<?php
/*
* Kadang kita butuh melakukan import banyak hal di satu namespace yang sama
* PHP memiliki fitur grup use, dimana kita bisa import beberapa class, function atau constant dalam satu perintah use
* Untuk melakukan itu, kita bisa menggunakan kurung{}*/

require_once "./class.php";

use Eksekutif\{OOP as Oop1, Dummy, Sample};

$oop1 = new Oop1();
$dummy = new Dummy();
$sample = new Sample();

var_dump($dummy);
