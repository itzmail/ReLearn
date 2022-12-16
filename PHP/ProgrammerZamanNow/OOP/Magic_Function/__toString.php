<?php
/*
* __toString() function merupakan salah satu magic function yang digunakan sebagai
* representasi string sebuah object
* Jika misal kita ingin membuat string dari object ktia , kita bias membuat function __toString()*/

class School {
  public bool $isStudent = true;
  private string $name = "Ismail";
  protected int $grade = 76;

  function __toString()
  {
    return "Are you still student ? $this->isStudent. \n What's your name? $this->name. \n How about your grade? $this->grade";
  }
}

$school = new School();

// cara memanggil function __toString()
// cara 1
$toString = (string) $school;

// cara 2
echo $school . PHP_EOL;
