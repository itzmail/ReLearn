<?php
/*
* Arrow function berfungsi di php 7.4 keatas
* Arrow function sama dengan anonym function
* Hal yang membedakan adalah, secara otomatis variable diluar closure bisa digunakan, tidak seperti anonym function yang harus pakai 'use
* 
* Pembuatan arrow function menggunakan fn
* Arrow function dikhususkan untuk function yang sederhana 
*/

$firstName = "Ismail";
$lastName = "Alam";

$sayHello = fn() => "Hello $firstName and $lastName";

echo $sayHello();
