/*
* Tipe data Bukan primitif merupakan bentuk baru dari penulisan java
* Tipe data ini termasuk kedalam tipe data object
* Semua tipe data object memiliki default value null
* Semua tipe data object dituliskan diawal huruf kapital*/

public class TipeDataBukanPrimitif {
    public static void main (String[] args){
        Integer iniInteger = 1_000_000;
        Double iniFloat = 12.1221;
        Byte iniByte = 105;

        String iniString = null;
        System.out.println(iniString);

        // Konversi Tipe data Primitif ke Tipe Data bukan Primititf

        int age = 21;
        Integer yourAge = age; // ini secara otomatis akan mengorversi

        // Bagaimana kalau dari int ke short atau long yang nilainya lebih kecil atau lebih besar

        Short konversiShort = yourAge.shortValue();
        Long konversiLong = konversiShort.longValue();
    }
}
