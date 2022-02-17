<?php
/*
* Sebelumnya kita tahu kalau abstract class bisa kita gunakan sebagai kontrak untuk class child nya
* Namun sebenarnya yang lebih tepat untuk kontrak adalah interface
* jangan salah sangka bahwa Interface disini bukanlah UI
* Interface mirip seperti abstract class, yang membedakan adalah di interface, semua method otomatis abstract, tidak memiliki block
* Di interface kita tidak boleh meiliki properties, kita hanya boleh memiliki constant
* Untuk mewariskan interface, kit atidak menggunakan kata kunci extends, melanikan implements
* Dan berbeda dengan class, ktia bisa implements lebih dari satu interface*/

namespace Data;

interface Car {
  function drive(): void;

  function getTire(): int;
}

class Avanza implements Car, IsMaintenance {
  function drive(): void {
    echo "Drive Avanza" . PHP_EOL;
  }

  function getTire(): int {
    return 4;
  }

  // function ini harus dicantumkan karenan implement car merupakan extends dari interface HasBrand
  function getBrand(): string {
    return "Toyota";
  }

  // Yang ini juga harus dicantumkan karena kita mencantumkan implements IsMaintenance
  function isMaintenance(): bool 
  {
    return false;
  }
}


/*
* INTERFACE INHERITANCE
* Sebelumnya kit asudah tahu kalo di PHP, child class hanya bisa punya 1 class parent
* Namun berbeda dengan interface, sebuah child class bisa implement lebih dari 1 interface
* Bahkan interface pun bisa implement interface lain, bisa lebih dari 1, Namun jika interface ingin mewarisi interface lain, kita menggunakan kata kunci extends, buka implements*/

interface HasBrand {
  function getBrand(): string;
}

interface IsMaintenance {
  function isMaintenance(): bool;
}

interface Car extends HasBrand { // ini akan error karena class Avanza implements Car sehingga function getBrand() harus dijalankan
  function drive(): void;

  function getTire(): int;
}
