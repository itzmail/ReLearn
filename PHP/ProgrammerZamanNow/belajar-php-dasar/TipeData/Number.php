<?php
/* Integer */
echo "Decimal : ";
var_dump(1234);

echo "Octal : ";
var_dump(0123);

echo "Hexadecimal : ";
var_dump(0x1A);

echo "Binary : ";
var_dump(0b1111111);

echo "Underscore di Number : ";
var_dump(1_23_4);

/* Floating Point */
echo "Floating Point : ";
var_dump(1.234);

echo "Dengan E notation Plus (1.2 x 1000) : ";
var_dump(1.2e3);

echo "Dengan E notation Minus (7 x 0.001) : ";
var_dump(7e-3);

echo "Underscore di Floation Point : ";
var_dump(1_234.567);

/* Kondisi Integer Overflow */
/* Kondisi dimana kapasitas integer di PHP melebihi kapasitas bit (32bit/64) pada device
dan akan diubah menjadi FLOATION POINT */
echo "Integer Overflow 32 bit : ";
var_dump(2147483648);

/*String to Integer*/
var_dump(1 + "12");
var_dump(1 + "12 Small Pigs"); //akan terbaca 13 tetapi setelah itu akan ada peringatan bahwa string tersebut ada huruf


?>
