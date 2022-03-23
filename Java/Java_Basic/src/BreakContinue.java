public class BreakContinue {
    public static void main (String[] args){
        /*Break untuk menghentikan perulangan*/
        var firstValue = 1;

        while (firstValue <= 10){
            System.out.println("Perulangan ke-" + firstValue);
            firstValue++;

            if(firstValue == 6){
                break;
            }
        }

        /*
        * Continue untuk digunakan men-skip perulangan.
        * Jadi nanti perulangan tersebut akan dilewati
        * */

        /*var secondValue = 0;
        do{
            if(secondValue == 8){
                continue; // bila sesuai maka kode dibawah tidak dieksekusi
            }
            secondValue++;
            System.out.println("Perulangan kedua yang ke-" + secondValue);

        }while(secondValue <= 10)*/;

        // contoh 2
        for(var init = 1; init <= 10; init++){
            if(init % 2 == 0){
                continue;
            }

            System.out.println("Perulangan ganjil yang ke-" +  init);
        }
    }
}
