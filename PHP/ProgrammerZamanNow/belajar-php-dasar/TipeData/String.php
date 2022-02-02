<?php
// Single quote
// echo 'Belajar Tipe Datan String ';

// Dual quote
// echo "Bisa dibikin \n seperti ini\t ok";

/* Perbedaan single quote dan double quote ialah kalau double kita bisa menggunakan escape sequence sedangakan single quote tidak bisa */

/* dengang penulisan string ini kita bisa menuliskan escape sequence tanpa perlu menuliskan dicodingan ini */
// Heredoc
// echo <<<NamaTerserah
    
// halo aku siapa ya
//         tapi kamu siapa 
// kita siapa 
//         we dont'know just keep moving
    
// NamaTerserah; // penulisan closing tag tidak boleh terlalu menjorok ke depan

// Pakai identifier

/*{
    echo <<<END
        coba 1
    END;
}*/


$values = [<<<END
a
	b
		c
END, 'd e f'];
var_dump($values);

/*Nowdoc*/
echo <<<'EOD'
example of string spanning multiple lines
using nowdox syntax. Backslasses are alwaya treated litterally
e.g. \\ and \
EOD;

/*Kesimpulan*/
/*Penggunaan Heredoc dan Nowdoc perbedaanya ada di bisa parsing atau tidak. kalau Heredoc bisa Nowdoc tidak*/
