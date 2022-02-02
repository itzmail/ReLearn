<?php
/*
* Karena constructor sama seperti function, maka constructor-pun bisa kita deklarasikan ulang di class Child-nya
* 
* Sebenarnya di PHP, kita bisa meng-override function dengan parameter yang berbeda, namun SANGAT TIDAK DISARANKAN
*
* Jika kita melakukan override function dengan arguments berbeda, maka PHP akan menyampaikan WARNING
* Namun berbeda dengan constructor overriding, kita boleh meng-override dengan mengubah parameternya, namun direkomendasikan untuk memanggil parent constructor
* */

require_once './function_overriding.php';

$manager = new Manager();
$vp = new VicePresident();

$manager->greetings("Ismail");
$vp->greetings('Alam');

// Kesimpulannya untuk function selain __construct, kalau mau di-overriding harus memiliki parameter yang sama
