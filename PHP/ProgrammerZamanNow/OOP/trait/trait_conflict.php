<?php
/*
* Jika kita menggunakan kebih dari satu trait, lalu terdapat function yang sama di trait tersebut
* Maka hal tersebut akan menyebabkan konflik
* Jika terjadi konflik seperti ini, kita bisa mengatasinya dengan menggunakan kata kunci insteadof*/

trait a {
  function doA() {
    echo "a" . PHP_EOL;
  }

  function doB() {
    echo "b" . PHP_EOL;
  }
}

trait b {
  function doA() {
    echo "A" . PHP_EOL;
  }

  function doB() {
    echo "B" . PHP_EOL;
  }
}

class Conflict {
    use a, b {
    a::doA insteadof b;
    b::doB insteadof a;
  }
}

$conflict = new Conflict();
$conflict->doA();
$conflict->doB();
