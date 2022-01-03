<?php

/**
 * Inheritance atau pewarisan adalah kemampuan untuk menurunkan sebuah class ke class lain
 * Dalam artian, kita bisa membuat class parent dan class child
 * Class Child, hanya bisa punya satu class Parent, namun satu class Parent bisa punya banyak class Child
 * Saat sebuah class diturunkan, maka semua properties dan function yang ada di class Parent, secara otomatis akan dimiliki oleh class Child
 * Untuk melakukan pewarisan di class Child, kita harus menggunakan keyword extends lalu diikuti dengan nama class parent nya
 */ 

 class Manager {
     var string $name;

     function greetings(?string $name) : void
     {  
        echo "Hi $name, my name is $this->name" . PHP_EOL;

    }
 }

class VicePresident extends Manager{

}

$vp = new VicePresident();
$vp->name="Joko";
$vp->greetings("Ismail");