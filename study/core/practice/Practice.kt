fun main() {""
    /*val morningNotif = 51
    val eveningNotif = 135

    printNotificationSummary(morningNotif)
    printNotificationSummary(eveningNotif)*/

    /*printFinalTemperature(27.0, "C", "F", { celsius -> celsius * 1.8 + 32 } ) // konversi ke fahrenheit F = C * 1.8 + 32
    printFinalTemperature(350.0, "K", "C", { kelvin -> kelvin - 273.15 } ) // konversi ke celcius C = K - 273.15
    printFinalTemperature(10.0, "F", "K", { fahrenheit -> (fahrenheit - 32) / 1.8 + 273.15 } ) // konversi ke kelvin K = (F - 32) / 1.8 + 273.15*/

//    println(catalogSong("Kau Adalah", "Isyana Sarasvati", 2015))
//    println(catalogSong("Jangan Rubah Takdirku", "Andmesh", 2018))

//    val amanda = Person("Amanda", 33, "Memasak", null)
//    val atiqah = Person("Atiqah", 35, "Membaca", amanda)
//
//    amanda.showProfile()
//    atiqah.showProfile()
}

/*
App Notifikasi Seluler

fun printNotificationSummary(numberOfMessages: Int) {
    println("""
        You have $numberOfMessages new messages
        Your phone is blowing up! You have 99+ notifications
    """.trimIndent())
}*/

/*
App Tiket Bioskop

fun ticketPrice(age: Int, isMonday: Boolean): Int {
    val basePrice = 100
    return when {
        age < 18 -> basePrice / 2
        age < 21 -> basePrice * 3 / 4
        isMonday -> basePrice * 9 / 10
        else -> basePrice
    }
}*/

/*
App Konversi Suhu

fun printFinalTemperature(
    initialMeasurement: Double,
    initialUnit: String,
    finalUnit: String,
    conversionFormula: (Double) -> Double
) {
    val finalMeasurement = String.format("%.2f", conversionFormula(initialMeasurement)) // two decimal places
    println("$initialMeasurement degrees $initialUnit is $finalMeasurement degrees $finalUnit.")
}*/

fun catalogSong(title: String, artist: String, year: Int): String {
   return "$title, dibawakan oleh $artist, dirilis pada tahun $year."
}

class Person(val name: String, val age: Int, val hobby: String?, val referrer: Person? = null) {
    fun showProfile() {
        println("""
            Nama: $name
            Usia: $age
            Hobby: ${hobby ?: "Tidak punya hobby"}
            Rekomendasi teman: ${referrer?.name ?: "Tidak ada"}
        """.trimIndent())
    }
}