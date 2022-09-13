package controlFlow;
import kotlin.random.Random

fun main(args: Array<String>) {
    /*val value = 7;
    val stringOfValue = when(value) {
        6 -> println("Value is $value");
        7 -> println("Value is $value");
        8 -> println("Value is $value");
        9 -> {
            println("Value is $value");
            "Mantap Jiwa"
        }
        else -> println("Value is $value");
    }*/

    // Cek type data
    /*val anyType : Any = 100L;
    when(anyType){
        is Long -> println("The Value has a Long Type");
        is String -> println("the value has a string type");
        else -> println("undefined");
    }*/

    // Cek masih dalam range?
    /*val value =  27
    val ranges = 10..50 // menyatakan range

    println(ranges);

    when(value){
        in ranges -> println("value is in the range")
        !in ranges -> println("value is outside the range")
        else -> println("value undefined")
    }*/

    // Menangkap subjek dari when expression di alam sebuah variable
    val registerNumber = when(val regis = getRegiterNumber()){
        in 1..50 -> 50 * regis
        in 51..100 -> 100 * regis
        else -> regis
    }
}

fun getRegiterNumber() = Random.nextInt(100);

// My Opinion is When expression is same as switch case in javascript