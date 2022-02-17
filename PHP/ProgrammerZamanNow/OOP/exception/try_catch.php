<?php
/**
 * Saat kita memanggil sebuah function yang bisa menyebabkan exception, maka kita disarankan menggunakan try-catch expression di PHP
 * ini gunanya agar kita bisa menangkap exception yang terjadi, karena kita tidak ditangkap, lalu terjadi exception, maka secara otomatis program kita akan berhenti
 * Cara menggunakan try-catch expression di PHP : di blok try, kita tinggal panggil method yang bisa menyebabkan exception, dan di block catch kita bisa melakukan sesuatu jika terjadi exception
  */

  require_once "./intro.php";

  $loginrequest = new LoginRequest();
  $loginrequest->username = "  ";
  $loginrequest->password = "  ";

  try{
      validateLoginRequest($loginrequest);
  } 
  /* Multiple Catch type 1 */
//   catch (ValidationException $exception) { // parameter di sana terdapat nama class dan itu didapatkan dari percabangan yang ada di function validateLoginRequest dan catch sendiri menangkap yang kita throw di percabangan tersebut
//     // var_dump($exception);
//      echo "Validation error : {$exception->getMessage()}" . PHP_EOL;
//   } catch (Exception $exception) {
//       echo "Validation error : {$exception->getMessage()}" . PHP_EOL;
//   }

  /* Multiple catch type 2 */
catch (ValidationException | Exception $exception) {
    echo "Ada error mas bro : {$exception->getMessage()}" . PHP_EOL;
}
  