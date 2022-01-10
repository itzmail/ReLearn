<?php
/*
* Kadang kita ingin mengakses function yang terdapat di class parent yang sudah terlanjur kita override di class Child
* Untuk mengakses function milik class parent, ktia bisa menggunakan keyword parent
* Sederhananya, parent digunakan untuk mengakses class parent*/

namespace Data;
class Shape {
  function getCorner(): int {
    return 0;
  }
}

class Rectangle extends Shape {
  public function getCorner(): int {
    return 4;
  }

  public function getParentCorner(): int {
    return parent::getCorner();
  }
}

use Data\{Shape, Rectangle};

$shape = new Shape();
$rectangle = new Rectangle();

echo "Akses class parent : {$shape->getCorner()}" . PHP_EOL;
echo "Akses class child : {$rectangle->getCorner()}" . PHP_EOL;
echo "Akses function parent yang sudah di overidding : {$rectangle->getParentCorner()}" . PHP_EOL;
