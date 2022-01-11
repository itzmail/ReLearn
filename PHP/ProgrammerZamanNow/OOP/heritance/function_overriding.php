<?php

/*
* Function overriding adalah kemampuan mendeklarasikan ulang function di child class, yang sudah ada di parent class
* Saat kita melakukan proses overriding tersebut, secara otomatis ketika kita membuat object dari class child, function yang di class parent tidak bisa diakses lagi
* */

class Manager {
     var string $name;
     var string $title;

     // Materi constructor overriding
  function __construct(string $name = "", string $title = "Manager"){
    $this->name = $name;
    $this->title = $title;
  }

  function greetings(?string $name) : void    
  {  
        echo "Hi $name, my name is $this->title $this->name" . PHP_EOL;

  }
}

class VicePresident extends Manager{

  // Constructor yang di-overriding
  function __construct(string $name ="") {
    // tidak wajib untuk mengambil dari parent tapi direkomendasikan
    parent::__construct($name, "VP");
  }

  function greetings(?string $name) : void // function ini ditimpa dari function parentnya 
    {  
        echo "Hi $name, my name is $this->title $this->name" . PHP_EOL;
    }
}

// $manager = new Manager();
// $manager->name="Ismail";
// $manager->greetings("Joko"); // yang akan dijalankan function milik Manager

// $vp = new VicePresident();
// $vp->name = "Alam";
// $vp->greetings("Joko"); // yang akan dijalankan function milik Vice President bukan milik parentnya(Manager)
