<?php
/*
* Visibility/Acces modifier adalah kemampuan properties, function dan constant dapat diakses dari mana saja
* Secara default, properties, function dan constant yang kita biat di dalam class bisa diakses dari mana saja, atau artinya dia adalah public
* Selain public, masih ada beberapa visibility lainnya
*
* Secara default keyword var untuk properties adalah sifatnya public
*
* Acces Level
* public :
*   - Bisa diakses di mana saja di dalam class
*   - Bisa diakses di turunan class
*   - Bisa diakses di luar class
*
* Protected : 
*   - Bisa diakses di mana saja di dalam class
*   - Bisa diakses di turunan class
*   - Tidak Bisa diakses di luar class
*  
* Private : 
*   - Bisa diakses di mana saja di dalam class
*   - Tidak Bisa diakses di turunan class
*   - Tidak Bisa diakses di luar class
*   Bila kita memaksakan mengakases private maka akan muncul error PHP Fatal error:  Uncaught Error: Cannot access private property Product::$name in /home/ismailify/Documents/education/ReLearn/PHP/ProgrammerZamanNow/OOP/visibility.php:38
Stack trace
* */

class Product {
  private string $name;
  protected int $price;

  public function __construct(string $name, int $price) {
    $this->name = $name;
    $this->price = $price;
  }

  public function getName() : string {
    return $this->name;
  }

  public function getPrice() : string {
    return $this->price;
  }
}
$product = new Product("Apple", 20000);

echo "Nama : " . $product->getName() .PHP_EOL;
echo "Price : " . $product->getPrice() .PHP_EOL;

class ClassProtected extends Product {
  function sampleProtect() {
    echo "Harga yang di protect : $this->price";
  }
}

$protectedSample = new ClassProtected("Jambu", 3000);
$protectedSample->sampleProtect();
