fun main() {
    val text: String? = null;

    /*
    * Safe calls Opertor (?.)
    * Dalam menggunakan safe call, kita akan mengganti tanda titik (.) dengan tanda (?.) saat mengakses atau mengelola nilai dari objek nullable.
    * Seperti ini:
    * */
    text?.length;

    /*
    * Elvi Opertor (?:)
    * Elvis operator memungkinkan kita untuk menetapkan default value atau nilai dasar jika objek bernilai null.*/
    val textLength = text?.length?: 7;

//    Kode diatas sebenarnya sama seperti dibawah ini
    val panjangText = if(text != null) text.length else 7;

    /*
    * Non Null Assertion (!!)
    * Dengan menggunakan non-null assertion kompiler akan mengizinkan kita untuk mengakses atau mengelola nilai dari sebuah objek nullable.
    * Namun penggunaan operator tersebut sangat tidak disarankan karena akan memaksa sebuah objek menjadi non-null.
    * Sehingga ketika objek tersebut bernilai null, Anda tetap akan berjumpa dengan NullPointerException.*/

    val textTerpaksaTidakNull = text!!.length;
}