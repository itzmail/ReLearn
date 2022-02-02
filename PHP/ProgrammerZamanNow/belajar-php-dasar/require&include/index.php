<?php
/**
 * require dan include hampir sama import pada javascript
 * bedanya require dan include apa?
 * 
 * require adalah jifa file yang diambil tidak ada maka akan terjadi error dan program terhenti
 * include sebaliknya, meskipun itu tidak ada hanya akan muncuk peringatan
* 
* Posisi juga diperhatikan karena php berjalan dari atas ke bawah*/

 include "./sample/sayHello.php";

 echo sayHello("Ismail", "Alam");

/*
* Require_once & Include_once
* function ini berguna untuk mengambil function di file php lainnya cukup sekali saja
*
* karena bila kita include lebih dari satu maka akan terjadi error redeclare function 
* */


// include "./sample/sayHello.php"; maka akan error redeclare function
 include_once "./sample/sayHello.php";
  include_once "./sample/sayHello.php";

 echo sayHello("Ismail", "Alam");
