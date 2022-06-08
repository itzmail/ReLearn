package controlFlow

import java.awt.Color

/*
    * Enumarition merupakan salah satu fitur yang bisa kita gunakan
    * untuk menyimpan kumpulan objek yang telah didefinisikan menjadi
    * tipe data konstanta
    * */

fun main() {
    val colors: controlFlow.Color = controlFlow.Color.valueOf("RED");
    println("Color is $colors");
    println("Color value is ${colors.value.toString(16)}");
}

enum class Color(val value: Int) {
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF)
}