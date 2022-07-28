package OOP

import kotlin.reflect.KProperty

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