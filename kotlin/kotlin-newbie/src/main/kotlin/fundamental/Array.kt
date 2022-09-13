package fundamental

fun main(args: Array<String>) {
    val examArray = arrayOf(1, 2, true, "Mantap");
    val charArray = charArrayOf('o', 'a', 'B'); // array elementnya char

    val intArray = Array(4, {i -> i * i});

    print(intArray[0]);
    print(intArray[1]);
    print(intArray[2]);
    print(intArray[3]);
}