<?php
/*Trait Overriding
* Jika sebuah class memiliki parent class yang memiliki function yang sama dengan function di trait, maka secara otomatis trait akan meng-override function tersebut
* Namun jika kita membuat functio nyang sama di class nya, maka secara otomatis kita akan meng-override function di /**
* Sehingga posisinya seperti ini ParentClass=override by=> Trait=override by=>ChildClass
*/

require_once './index.php';

use Data\Traits\{SayGoodBye, SayHello};

class ParentPerson {
  public function goodBye(): void {
    echo "Good Bye in Person" . PHP_EOL;
  }

  public function hello(): void {
    echo "Hello in Person" . PHP_EOL;
  }
} // class parent ini akan ter-override oleh trait yang ada di child class

class Person extends ParentPerson {
    use SayHello, SayGoodBye;

    public function goodBye(): void {
        echo "Good Bye in Person" . PHP_EOL;
    }
    
    public function hello(): void {
    echo "Hello in Person" . PHP_EOL;
    } 

    // yang akan di override adalah function yang ada di child class
}

$person = new Person();
$person->hello();
$person->goodBye();