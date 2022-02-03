<?php
/*
* Final Function
* Kata kunci final juga bisa digunakan di Function
* Jika sebuah function kita tambahkan kita tambahkan kata kunci final, maka artinya function tersebut tidak bisa di override lagi di class child nya
* Ini sangat cocok jika kita ingin mengunci implementasi dari sebuah method agar tidak bisa diubah lagi oleh class child nya */

class SocialMedia {
  var string $name;
}

class Facebook extends SocialMedia {
  final public function login(string $username, string $password): void {

  }
}

class FakeFacebook extends Facebook {
  // public function login(string $username, string $password): void {} // akan terjadi ERROR
}
