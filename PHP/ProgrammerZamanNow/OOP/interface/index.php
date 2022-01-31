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

class Avanza implements Car {
  function drive(): void {
    echo "Drive Avanza" . PHP_EOL;
  }

  function getTire(): int {
    return 4;
  }
}
