public class WhileLoop {
    public static void main(String[] args){
        /*
        * While Loop adalah versi perulanagan yang lebih sederhana dibanding for loop
        * DI While loop, hanya terdapat kondisi perulangn, tanpa ada init statement dan post statement
        * */

        var counter = 1;
        while(counter <= 10){
            System.out.println("Perulangan " + counter);
            counter++;
        }

    }
}
