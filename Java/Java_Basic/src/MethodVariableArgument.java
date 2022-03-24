public class MethodVariableArgument {
    /*Kadang kita butuh mengirim data ke method sejumlah data yang tidak pasti
    * Biasanya, agar bisa seperti ini, kita akan menggunakan Array sebagai parameter di method tersebut
    * Namun di Java, kita bisa menggunakan variable argument, untuk mengirim data yang berisi jumlah tak tentu, bisa nol atau lebih
    * Parameter dengan tipe variable argument, hanya bisa ditempatkan di POSISI AKHIR PARAMETER*/

    public static void main(String[] args){
        int[] arrayInteger = {
                76, 87, 90,45,100
        };

//        sayCongrats("Ismail", arrayInteger);
        graduation("Ismail", 50, 50, 50, 50);
    }

    // Tanpa variable Argument

    static void sayCongrats(String name, int[] values) {
        int total = 0;
        for(var value : values) {
            total += value;
        }

        int finalValue = total / values.length;

        if(finalValue >= 75){
            System.out.println("Selamat " +name+ ", Anda Lulus. rata-rata nilai" + finalValue);
        } else {
            System.out.println("Yah... anda tidak lulus, rata-rata nilai" + finalValue);
        }
    }

    /* Kalau memakai variabel argument seperti dibawah ini*/

    static void graduation(String name, int... values){
        int total = 0;
        for(var value : values) {
            total += value;
        }

        int finalValue = total / values.length;

        if(finalValue >= 75){
            System.out.println("Selamat " +name+ ", Anda Lulus. rata-rata nilai" + finalValue);
        } else {
            System.out.println("Yah... anda tidak lulus, rata-rata nilai" + finalValue);
        }
    }
}
