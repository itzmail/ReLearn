package controlFlow;

fun main(args: Array<String>) {
    /*val rangeInt = 1..10;
    print(rangeInt.step);*/

    // Mengubah nilai dengan Step
    /*val rangeInt = 1..10 step 2;
    rangeInt.forEach {
        print("$it ")
    }

    println(rangeInt.step); output: 1 3 5 7 9 2*/

    // Menggunakan fungsi rangeTo() sama dengan ..
    /*val rangeInt = 1.rangeTo(10);*/

    // Perhitungan loop range jadi turun
    /*val downInt = 10.downTo(1);*/

    // Kita juga bisa memeriksa apakah suatu nilai ada pada cakupan nilai Range
    /*val tenToOne = 10.downTo(1);
    if(7 in tenToOne) {
        println("Value 7 available")
    }

    sama seperti

    if (1 <= 7 && 7 <= 10){
        println("Value 7 available")
    }

    jika kita tidak ingin nilai tersebut tidak ada di range

    if (11 !in tenToOne) {
        println("No value 11 in Range ")
    }
    */

    // Bisa juga check char
    /*val rangeChar = 'A'.rangeTo('F');*/

    // ForLoop dengan withIndex()
    /*val ranges = 1.rangeTo(10) step 3;
    for((index, value) in ranges.withIndex()) {
        println("Value $value with index $index");
    }*/

    // range dengan forEach
    /*val ranges = 1.rangeTo(10) step 3;
    ranges.forEach{ value ->
        println("Value is $value!");
    }*/

    /*val ranges = 1.rangeTo(10) step 3
    ranges.forEachIndexed { index, value ->
        println("value $value with index $index")
    }

    Jika kita hanya ingin menggunakan argumen index, maka kita bisa mengubah argumen value menjadi _ seperti berikut:
    ranges.forEachIndexed { index, _ ->
        println("index $index")
    }
    */
}