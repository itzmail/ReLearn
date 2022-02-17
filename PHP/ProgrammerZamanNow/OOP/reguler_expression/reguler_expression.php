<?php
/**
 * PHP mendukung reguler expression yang kompatibel dengan bahasa pemrgroman Perl
 * Reguler expression merupakan fitur yang digunakan untuk melakukan pencarian di string menggunakan pola tertentu
 * Materi ini sebenarnya materi yang sangat panjang, sehingga disini kita akan bahas sedikit pengenalanya
 * Untuk pembuatan attern di reguler expression, detilnya bisa dibaya dokumentasi : https://www.php.net/manual/en/pcre.pattern.php
 */

 /** preg_match_all | preg_match 
  * Digunakan tunk mencari match pattern
  * syntaxnya preg_match_all('yang mau dicari', 'Objeknya', disimpan disuatu variable yang match );
 */

 $matches = [];
 $result = (bool)preg_match_all("/ismail|ala|nur/i", "Ismail Nur Alam", $matches); // bool didepan hanya untuk merubah yang defaultnya int jadi boolean

 var_dump($result);
 var_dump($matches);

 /** preg_replace
  * Digunakan untuk mereplace semua pattern dengan replacemen
  * syntax preg_replace ($pattern, $replacement, $subject)
  */

  $result = preg_replace("/anjing|bangsat/i", "***", "dasar lu anjing dan bangsat!");
  
  var_dump($result);

/** preg_split 
 * Digunakan untuk memotong pattern menjadi array
 * syntax preg_split($pattern, $subject)
*/

$result = preg_split("/[\s,-]/", "Ismail Nur Alam,   Mantap-Jiwa"); // \s aritnya white space spasi atau spasi tab

var_dump($result);
