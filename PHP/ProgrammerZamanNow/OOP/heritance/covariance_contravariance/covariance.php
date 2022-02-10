<?php
/**
 * Saat kita meng override function dari parent class, biasanya di child class kita akan membuat function yang sama dengan function yang di parent
 * 
 * Dengan covariance memungkinkan kita meng override return function yang di parent dengan return function yang di parent dengan return value yang lebih sepsifik
 */

 // data class

 abstract class Animal
 {
     public string $name;

     abstract public function run(): void;
 }

 class Cat extends Animal
 {
     public function run(): void
     {
         echo "Cat $this->name is running" . PHP_EOL; 
     }
 }

 class Dog extends Animal
 {
     public function run(): void
     {
         echo "Dog $this->name is running" . PHP_EOL;
     }
 }

 // data interface

 interface AnimalShelter
 {
     function adopt(string $name): Animal;
 }

 class DogShelter implements AnimalShelter
 {
     public function adopt(string $name): Dog // function ini bisa mereturn dengan spesifik. fitur ini disebut dengan covariance
     {
        $dog = new Dog();
        $dog->name = $name;
        return $dog;
     }
 }

 class CatShelter implements AnimalShelter
 {
     public function adopt(string $name): Cat // function ini bisa mereturn dengan spesifik. fitur ini disebut dengan covariance
     {
        $cat = new Cat();
        $cat->name = $name;
        return $cat;
     }
 }

 // cara memanggil Covariance

 $catShelter = new CatShelter();
 $cat = $catShelter->adopt("Luna");
 var_dump($cat);

 $dogShelter = new DogShelter();
 $dog = $dogShelter->adopt("Doggy");
 var_dump($dog);