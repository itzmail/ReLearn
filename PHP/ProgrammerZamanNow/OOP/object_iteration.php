<?php
/*
* Yang perlu diingat lagi adalah Iteration adalah perulangan, jadi di sini kita akan melakukan perulangan terhadap object
* Saat kita membuat object dari sebuah class, kita bisa melakukan iterasi ke semua properties yang terdapat di object tersebut menggunakan foreach
* Hal ini mempermudah kita saat ingin mengakses semua properties yang ada di object
* Secara default, hanya properties yang public yang bisa diakses oleh foreach
* */

class Data
{
  var string $first = "First";
  public string $second = "Second";
  protected string $third = "Third";
  private string $fourth = "Fourth";
}

$data = new Data();

foreach ($data as $key => $value) {
  echo "$key : $value \n";
}
