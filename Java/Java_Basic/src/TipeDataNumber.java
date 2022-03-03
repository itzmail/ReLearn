public class TipeDataNumber {
    public static void main(String[] args) {
        // Integer
        byte iniByte = 100; // max 127 min -127 size 1 byte
        short iniShort = 10000; // max 32k min -32k size 2 byte
        int iniInt = 10000000; // max 2jt min 2jt size 4 byte
        long iniLong = 1000000000; // max 2000jt min 2000jt size 8 byte
        long iniLong1 = 100000000L;

        // Float
        float iniFloat = 12.10F; // max 3.4e+038 min 3.4e-038 size 4 byte
        double iniDouble = 12.12; // max 1.7e+308 min 1.7e-308 size 8 byte

        // Literals
        int decimalInt =34;
        int hexDecimal = 0xFFFFF;
        int binaryDecimal = 0b10101010;

        // Fitur Tambahan
        long amount = 1_000_000_000_000L; // Hanya digunakan sebagai pemisah aja, jadi ketika nanti kita run, underscrore tersebut tidak ke baca

        // Konversi Tipe Data Number
        /* Widenig Casting (dilakukan secara otomatis) : byte -> short->int->long->float->double
        * Narrowing Casting (dilakukan secara manual) : double -> float -> long -> int -> short -> byte
        *
        * Karena dari kecil masih bisa di handle sama yang lebih besar
        * Untuk yang mengonversi dari besar ke kecil HATI" karena hal tersebut bisa mengakibatkan number overflow*/
            // Widening Casting
        byte INIBYTE = 12;
        short INISHORT = INIBYTE;
        int INIINT = INISHORT;
        long INILONG = INIINT;
        float INIFLOAT = INILONG;
        double INIDOUBLE = INIFLOAT;

            // Narowwing Casting
        float iniFloat2 = (float) iniDouble;
        long iniLong2 = (long) iniFloat2;
        int iniInt2 = (int) iniLong2;
        short iniShort2 = (short) iniInt2;
    }
}
