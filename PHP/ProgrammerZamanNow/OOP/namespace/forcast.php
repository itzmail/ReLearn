<?php

include('Rain.php');
include('sunny.php');
include('Fair.php');

$rain = new Rain();
$sunny = new NiceWeather\Sunny();
$fair = new NiceWeather\Fair();

var_dump($rain);
var_dump($sunny);
var_dump($fair);
