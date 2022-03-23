public class ForEach {
    public static void main(String[] args){
        // Foreach perulangan untuk array

        String[] array = {
                "Ismail", "Nur", "Alam", "Programmer", "Pengusaha"
        };

        for (var value: array) {
            System.out.println("Isi data array :" + value);
        }
    }
}
