<?php

require_once './index.php';

use Data\Traits\{People, SayHello, SayGoodBye};

$person = new People();
$person->goodBye('Ismail');
$person->hello('Ismail');

$person->name = "Ismail";
// var_dump($person);

// Trait Overriding
// $person->run();
