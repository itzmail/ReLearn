<?php
/*
* Sebelumnya kita sudah tahu bahwa class bisa menggunakan trait lebih dari satu
* Lantas bagaimana dengan trait yang menggunakan trait lainif?
* Trait bisa menggunakan trait lain, mirip seperti interface yang bisa implement interface lain
* Untuk menggunakan trait lain dari trait, penggunaanya sama seperti  dengan penggunaan trait di class yaitu menggunakan use
* */

require_once './index.php';

use Data\Traits\{SayGoodBye, SayHello, CanRun};

trait All {
  use SayGoodBye, SayHello, CanRun;
}

class Person {
  use All;
}

$person = new Person();
$person->goodBye('Ismail');
