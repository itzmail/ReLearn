<?php
/*
* Is functio adalah biasa digunakan untuk mengecek tipe data*/

$data = "Sample variable";
var_dump(is_string($data));
var_dump(is_bool($data));
var_dump(is_int($data));
var_dump(is_float($data));
var_dump(is_array($data));
var_dump(is_callable($data));

if(is_bool($data)) {
  echo 'Data ini berupa boolean';
} else if(is_string($data)) {
  echo "Data ini berupa string";
} else {
  echo "Tidak ada data";
}
