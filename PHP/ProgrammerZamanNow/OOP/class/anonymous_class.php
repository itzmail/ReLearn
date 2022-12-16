<?php
/*
* Anonymous class atau class tanpa nama
* Adalah kemampuan mendeklarasikan class, sekaligus menginstansiasi object-nya secara langsung
* Anonymous class sangat cocok ketika kita berhadapan dengan kasus membuat implementasi interface atau abstract class sederhana, tanpa harus membuat implementasi class object-nya*/

interface HelloWorld {
  function sayHello(): void;
}

$helloWorld = new class implements HelloWorld {
  function sayHello(): void {
    echo 'Hello Anonymous Class' . PHP_EOL;
  }
};

$helloWorld->sayHello();
