<?php
/**
 * Saat kita membuat aplikasi, ktia tidak akan terhindar dengan yang namanya error
 * Di PHP, error direpresentasikan dengan istilah exception, dan semua direpresentasikan dalam bentuk class exception
 * Kita bisa menggunakan class exception sendiri, atau menggunakan yang sudah disediakan oleh PHP
 * Jika kita ingin membuat exception, maka kita harus membuat class yang implement interface Throwable atau turunan-turunannya
 */

 // membuat class khusus untuk heritance dari exception
 class ValidationException extends Exception { // extends dari class Exception => ini merupakan fitur bawaan dari PHP

 }

 /**
  * Membuat Exception
  * Exception biasanya terjadi difunction
  * Di dalam kode program kita, untuk membuat exception kita cukup menggunakan kata kunci throw, diikuti dengan object exception nya
  */

  class LoginRequest {
      public string $username;
      public string $password;
  }

function validateLoginRequest(LoginRequest $request)
{
    if(!isset($request->username)) {
        throw new ValidationException("Username is null");
    } else if(!isset($request->password)) {
        throw new ValidationException("Password is null");
    } else if(trim($request->username) == "") {
        throw new Exception("Username is empty");
    } else if(trim($request->password) == "") {
        throw new Exception("Password is empty");
    } else {
        echo "Data valid" . PHP_EOL;
    }
}

// $loginRequest = new LoginRequest();
// $loginRequest->username = "eko";
// $loginRequest->password = "";

// validateLoginRequest($loginRequest);