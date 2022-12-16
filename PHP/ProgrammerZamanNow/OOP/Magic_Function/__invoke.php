<?php
/*
* __invoke() merupakan function yang diekseskusi ketika object yang kita buat dianggap sebgai functioni
* Misal ketika kita membuat object $studnet, lalu kita melakukan $studnet(), maka secara otomatis function __invoke() yang akan dieksekusi*/

class School {
  public string $id;
  public string $name;
  public int $value;

  function __invoke(...$arguments): void
  {
    $join = join(', ', $arguments);
    echo "Invoke student with arguments $join" . PHP_EOL;
  }
}

$school = new School();

// cara memanggil function __invoke
$school("Ismail", 0, true, "Alam");
