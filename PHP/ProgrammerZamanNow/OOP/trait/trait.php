<?php

require_once './index.php';

use Data\Traits\{Person, SayHello, SayGoodBye};

$person = new Person();
$person->goodBye('Ismail');
$person->hello('Ismail');

$person->name = "Ismail";
var_dump($person);
