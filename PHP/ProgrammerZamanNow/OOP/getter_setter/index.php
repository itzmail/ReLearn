<?php

class Category{
 private string $name;
 private bool $expensive;

  public function getName() : string {
    return $this->name;
  }

  public function setName(?string $input) : void {
    if(trim($name) !== ""){ // membuat validasi
     $this->name = $input;
    }
  }

  public function isExpensive() : bool {
    return $this->expensive;
  }

  public function setExpensive(bool $input) : void {
    $this->expensive = $input;
  }
}

$cg = new Category();
$cg->setName('MSI');
$cg->setExpensive(true);

echo "Nama barang : {$cg->getName()}" . PHP_EOL;
echo "Apakah produk tersebut mahal {$cg->isExpensive()}" . PHP_EOL;

// Masih muncul error