<?php
/*
* Kata kunci final bisa digunakan di class, dimana jika kita menggunakan kata kunci final sebelum class, maka kita menandakan bahwa class tersebut tidak bisa diwariskan lagi
* Secara otomatis semua class child nya akan error
* */

class SocialMedia {
  var string $name;
}

final class Facebook extends SocialMedia {
}

// class FakeFacebook extends Facebook {} // akan terjadi error

$fb = new Facebook();
$fb->name = "Ismail";

var_dump($fb);
