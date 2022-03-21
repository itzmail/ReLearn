public class Variable {
    public static void main(String[] args){
        // pada materi tipe data sebenarnya saya sudah mempelajari bagaimana cara variabel menyimpan sebuah value dengan cara menginisialsisasi terlebih dahulu jenis tipe data nya.
        // Hal tersebut karena java bersifat static, jadi kita harus memasukan value dengan variable  yang memiliki tipe data yang sama
        // Sejak java 10 kita bisa menuliskan variable dengan var, tetapi var sendiri tidak boleh diinisialisasi, harus dimassukan value

        var firstName = "ISmail"; // java secara otoamtis menginisialisasi kalau variable ini String, jadi tidak boleh diisi selain string
        var lastName = "Alam";

        System.out.println(firstName);
        System.out.println(lastName);

        // final keyword
        // final keyword artinya variabel tersebut bersiafat immutable.
        // di Java sering disebut juga sebagai constant

        final String dreams = "Enterprenuer";
        final byte number = 127;

        System.out.println(dreams);
        System.out.println(number);
    }
}
