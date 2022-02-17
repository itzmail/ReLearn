<?php
/**
 * Finally Keyword
 * Dalam try-catch, ktia bisa menambahkan block finally
 * Block finally ini adalah block dimana akan selalu dieksekusi baik terjadi exception ataupun tidak
 * Ini sangat cocok ketika kita ingin melakukan sesuatu, tidak peduli sukses ataupun gagal, midsl di block finnally error ataupun sukses membaca file, kita wajib menutup koneksi ke file tersebut, agar tidak menggantung di memori 
 */

 require_once 'intro.php';

 $loginrequest = new LoginRequest();

 try {
     validateLoginRequest($loginrequest);
 } catch (ValidationException | Exception $exception) {
     echo "Ada error : {$exception->getMessage()}" . PHP_EOL;
 } finally {
     echo "Error atau ngga error tetap dieksekusi" . PHP_EOL;
 }