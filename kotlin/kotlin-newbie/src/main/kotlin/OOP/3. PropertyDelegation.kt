package OOP

import kotlin.reflect.KProperty

/*
* Pengelolaan properti kelas baik itu memberikan atau merubah sebuah nilai dapat didelegasikan kepada kelas lain. Dengan ini kita dapat meminimalisir boilerplate dalam penulisan getter dan setter (jika properties menggunakan var) pada setiap kelas yang kita buat. Sebagai contoh, kita memiliki tiga buah kelas yang di dalamnya memiliki satu properti String. Jika kita ingin menerapkan getter dan setter pada setiap properti kelasnya, maka kita perlu menuliskan getter dan setter tersebut pada seluruh kelas. Hal tersebut dapat mengurangi efisiensi dalam menuliskan kode karena terlalu banyak kode yang harus kita tulis secara berulang. Solusinya, kita perlu membuat sebuah kelas yang memang bertugas untuk mengatur atau mengelola fungsi getter dan setter untuk sebuah properti kelas. Teknik tersebut pada Kotlin dinamakan Delegate.

Sebelum mendelegasikan sebuah properti kita perlu membuat kelas delegasi terlebih dahulu. Mari kita buat sebuah kelas delegasi.*/

// Function dibawah termasuk dalam delegate Property
class DelegateName {
    private var value: String = "Default"

    operator fun getValue(classRef: Any?, property: KProperty<*>): String {
        println("Fungsi ini sama seperti getter untuk properti ${property.name} pada class $classRef")
        return value;
    }

    operator fun setValue(classRef: Any?, property: KProperty<*>, newValue: String) {
        println("Fungsi ini sama seperti getter untuk properti ${property.name} pada class $classRef");
        println("Nilai ${property.name} dari: $value akan berubah menjadi $newValue")
    }
}

/* Delegate Function with Any Type */
class DelegateGenericClass {
    private var value: Any = "Default";

    operator fun getValue(classRef: Any?, property: KProperty<*>): Any {
        println("Fungsi ini sama seperti getter untuk properti ${property.name} pada class $classRef")
        return value;
    }

    operator fun setValue(classRef: Any, property: KProperty<*>, newValue: Any) {
        println("Nilai ${property.name} dari: $value akan berubah menjadi $newValue")
        value = newValue
    }
}

class AnimalDel {
    var name: String by DelegateName()
}

class PersonDel {
    var name: String by DelegateName()
}

class HeroDel {
    var name: String by DelegateName()
}

class AnimalGenDel {
    var name: Any by DelegateGenericClass();
    var weight: Any by DelegateGenericClass();
    var age: Any by DelegateGenericClass()
}

fun main(args: Array<String>) {
    val animal = AnimalDel();
    animal.name = "Dicoding Miaw";
    println("Nama Hewan: ${animal.name}")

    val person = PersonDel()
    person.name = "Dimas"
    println("Nama Orang: ${person.name}")

    val hero = HeroDel()
    hero.name = "Gatotkaca"
    println("Nama Pahlawan: ${hero.name}");

    val generic = AnimalGenDel();
    generic.name = "What ARE YOU F*CKING ABOUT THAT?";
    generic.weight = 6.2;
    generic.age = 21;
}