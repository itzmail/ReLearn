<?php
//Trait Visibility Override
/*
* Selain melakukan override function di class, kita juga bisa melakukan override visibility function yang terdapat di trait
* Namun untuk melakukan ini tidak perlu membuat function baru di class, kita bisa gunakan secara sederhana ketika menggunakan trait nya
* */

require_once './index.php';

use Data\Traits\{SayGoodbye, SayHello};

class Visibility {
    use SayGoodbye, SayHello {
        hello as private; // otomatis function hello akan berubah menjadi private
        goodBye as public;
    }
}

$visible = new Visibility();
$visible->goodBye('Ismail');