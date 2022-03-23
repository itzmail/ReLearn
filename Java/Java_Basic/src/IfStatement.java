public class IfStatement {
    public static void main(String[] args){
        /*
        * Dalam java, if adalah salah satu kata kunci yang digunakan untuk percabangan
        * Percabangan artinya kita bisa meneksekusi kode program tertentu ketika suatu kondisi terpenuhi*/

        var nilai = 170;
        var absen = 90;

        if(nilai == absen){
            System.out.println("Nilai dan absen sama");
        } else if(nilai < absen) {
            System.out.println("Nila Lebih Kecil dari absen");
        } else {
            System.out.println("Anda tidak dapat nilai");
        }
    }
}
