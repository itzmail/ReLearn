package controlFlow

fun main() {
    val listOfInt = listOf(1, 2, 3, null, 5, null);

    for (i in listOfInt) {
        /*if(i == null) continue
        print(i); // output: 12357*/

        /*if(i == null) break // output: langsung berhenti
        print(i)*/

        // BREAK AND CONTINUE LABELS
        /* Untuk melabeli sebuah expression
        * Contoh dari sebuah label adalah foo@ atau bar@.*/

        loop@ for(i in 1..10) {
            println("Outside Loop");

            for (j in 1..10) {
                println("Inside Loop")
                if ( j > 5) break@loop
            }
        }

        /*
   output :
       Outside Loop
       Inside Loop
       Inside Loop
       Inside Loop
       Inside Loop
       Inside Loop
       Inside Loop
*/
    }
}