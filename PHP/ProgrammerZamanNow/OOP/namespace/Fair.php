<?php
namespace NiceWeather;

include('Storm.php');
include('sunny.php');
include('Rain.php');

class Fair {
  public function __construct() {
    $storm = new Storm();
    $sunny = new Sunny();
    $rain = new \Rain(); // diberi awalan backslice yang artinya naik satu tingkat sari relative ke global lalu masuk ke namespace lainnya
  }
}
