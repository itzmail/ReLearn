<?php
/**
 * Contravariance
 * Contravariance adalah memperbolehkan sebuah child class untuk membuat function argumeny yang lebih spesifik dibandingkan parent nya
 * 
 * Maksudnya yang tadinya sifatnya child sekarang jadi parentnya */

 class Food
 {

 }

 class AnimalFood extends Food
 {

 }

// Diambil dari file sebelumnya, aku tidak require_once agar kita bisa melihat secara keseluruhan

 abstract class Animal
 {
     public string $name;

     abstract public function run(): void;

     public abstract function eat(AnimalFood $food): void;
 }

 class Cat extends Animal
 {
     public function run(): void
     {
         echo "Cat $this->name is running" . PHP_EOL; 
     }

     public function eat(AnimalFood $food): void
     {
         echo 'Cat is eating' . PHP_EOL;
     }
 }

 class Dog extends Animal
 {
     public function run(): void
     {
         echo "Dog $this->name is running" . PHP_EOL;
     }

     public function eat(Food $food): void
     {
         echo "Dog is eating" . PHP_EOL;
     }
 }

// Memanggil

 $cat = new Cat();
 $cat->eat(new AnimalFood());

 $dog = new Dog();
 $dog->eat(new Food());