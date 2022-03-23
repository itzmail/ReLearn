public class SwitchStatement {
    public static void main(String[] args){
        /*Switch Statement
        * Kadang kita hanya butuh menggunakan kondisi sederhana di if statement,
        * seperti hanya menggunakan perbandingan ==
        * Switch adalah stetement percabangan yang sama dengsan if, namun lebih sederhana */

        var nilai = "C";

        switch(nilai){
            case "A":
                System.out.println("Anda lulus dengan nilai sempurna");
                break;
            case "B":
            case "C":
                System.out.println("Anda Lulus");
                break;
            case "D":
                System.out.println("Mau lulus Hah???!!");
                break;
            case "E":
                System.out.println("Dah deh ngga tahu lagi");
                break;
            default:
                System.out.println("Memangnya anda sekolah di sini?");
        }

        /*Switch Lambda
         * Di Java versi 14, diperkenalkan switch expressin dengan lambda
         * Ini lebih mempermudah saat pernggunaan switch expression karena kita tidak perlu lagi menggunakan kata kunci break
         * */
        var value = "A";

        switch(value){
            case "A" -> {
                System.out.println("Wow Anda makan apa sih, kok bisa dapat nilai segitu");
            }
            case "B", "C" -> System.out.println("Anda Lulus, ..... Biasa aja tuh.....");
            case "D" -> System.out.println("Anda Remidi");
            default -> {
                System.out.println("Sangat disayangkan anda tidak lulus");
            }
        }

        /*Kata Kunci Yield
        * Di java 14, ada kata kunci baru yaitu yield, dimana kita menggunakan kata kunci yelds untuk mengembalikan nilai pada switch statement
        * Ini sangat mempermudah kita ketika butuh membuat data berdasarkan kondisi switch statement*/

        Integer ipk = 3;

        String ucapan = switch(ipk){
            case 4 :
                yield "Wow anda lulus dengan bahagia ya....";
            case 3 :
                yield "Anda Lulus sebagaimana kebanyakan dari mahasiswa lainnya";
            case 2 :
                yield "Makanya kalau kuliah itu harus fokus";
            default :
                yield "Anak mana loe.....";
        };

        System.out.println(ucapan);
    }
}
