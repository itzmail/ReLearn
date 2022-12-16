<?php
/**
 * Reflection adalah membaca struktur kode pada saat aplikasi sedang berjalan
 * Reflection adalh fitur yang biasanya digunakan saat kita membuat framework
 * 
 * info lengkap cek di https://www.php.net/manual/en/book-reflection.php
 */

/**
 * Studi kasus : Membuat Validation Framework
 * Validation framework yang sederhana, kita hanya akan mengecek apakah properties bernilai null atau tidak, kalo null atau belum di set, kita akan throw ValidationException
 * Tanpa reflection, biasanya untuk melakukan hal ini, kita butuh pengecekan secara manual
 * 
 * farmeworknya bisa lihat di file validateUtil.php yang static function validateReflection
 */

 require_once "../exception/intro.php";
 require_once "validateUtil.php";

 $request = new LoginRequest();

 $request->username = "Ismail";
 $request->password = "Mantap";

//  ValidationUtil::validate($request);
ValidationUtil::validateReflection($request);