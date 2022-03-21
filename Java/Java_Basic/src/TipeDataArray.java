public class TipeDataArray {
    public static void main(String[] args){
        String[] arrayString; // Inisialisasi Array di java, dan array yang kita buat kali ini hanya bisa menampung array bertipe data string
        arrayString = new String[3]; // kita deklarasikan mau berapa array yang bisa ditampung
        arrayString[0] = "Ismail";
        arrayString[1] = "Nur";
        arrayString[2] = "Alam";
        // arrayString[3] = "Alam"; array ini tidak bisa diakses karena sudah melebihi batas
        System.out.println("Array String");
        System.out.println(arrayString[0]);

        // Penulisa array cara lain
        Integer[] arrayInteger = new Integer[3];  // seperti ini boleh
        arrayInteger[0] = 1;
        arrayInteger[1] = 2;
        arrayInteger[2] = 3;
        System.out.println("Array Integer");
        var sum = arrayInteger[0] + arrayInteger[2];
        System.out.println(sum);

        // Array Initializer
        // ini hanya cara penulisan nya saja yang berbeda
        int[] arrayInt = new int[]{
                1, 12, 10, 93, 76, 29
        };

        long[] arrayLong = {
                120,123,123,41
        };

        System.out.println(arrayInt[2]);
        System.out.println(arrayLong.length);

        // Menghapus Array
         /*Pada dasarnya array di java tidak bisa dihapus, kalau di java hanya bisa mengganti data
         * int dianggap terhapus bila diganti dengan 0
         *
         * Ada pengecualian kalau bukan data primitif itu artinya bisa dihapus dengan MENGGANTI data jadi null*/

        String[] aString = {
                "Ismail", "Nur", "Alam"
        };

        aString[1] = null;

        System.out.println(aString[1]);

        // Array dalam array
        String[][] arrayArray = {
                {"Ismail", "Nur", "Alam"},
                {"Mantap", "Jiwa"}
        };

        System.out.println(arrayArray[0][1]);
        System.out.println(arrayArray[1][1]);
    }
}
