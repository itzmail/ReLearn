<?php

class Category{
 private string $name;
 private bool $expensive;

  function getName() : string {
    return $this->name;
  }

  function setName(?string $input) : void {
    if(trim($name) != ""){
     $this->name = $input;
    }
  }

  function isExpensive() : bool {
    return $this->expensive;
  }

  function setExpensive(bool $input) : void {
    $this->expensive = $input;
  }
}

$cg = new Category();
$cg->setName('MSI');
$cg->setExpensive(true);

echo "Nama barang : {$cg->getName()}" . PHP_EOL;
echo "Apakah produk tersebut mahal {$cg->isExpensive()}" . PHP_EOL;
