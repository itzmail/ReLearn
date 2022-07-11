package fundamental;

/*
    * Enumarition merupakan salah satu fitur yang bisa kita gunakan
    * untuk menyimpan kumpulan objek yang telah didefinisikan menjadi
    * tipe data konstanta
    * */



fun main(args: Array<String>) {
    val colors: controlFlow.Color = controlFlow.Color.valueOf("RED");
    println("Color is $colors");
    println("Color value is ${colors.value.toString(16)}");
}