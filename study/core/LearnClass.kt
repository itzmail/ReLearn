import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty
/*
KProperty adalah antarmuka yang mewakili properti yang dideklarasikan dan memungkinkan Anda mengakses metadata pada properti yang didelegasikan.
Ada baiknya memiliki informasi tingkat tinggi tentang pengertian KProperty.
*/

// keyword open untuk menandakan kalau dia bisa diwariskan
open class SmartDevice protected constructor(val nameDevice: String = "", val categoryDevice: String = "") {
    internal var name = ""
    var deviceStatus = ""
        protected set

    open val deviceType = "Unknown"

    constructor(nameDevice: String, categoryDevice: String, statusCode: Int) : this(nameDevice, categoryDevice) {
        deviceStatus = when(statusCode) {
            0 -> "Offline"
            1 -> "Online"
            else -> "Unknown"
        }
    }

    open fun turnOn() {
        println("Smart divce is turned on.")
    }

    open fun turnOff() {
        println("Smart divce is turned off.")
    }
}

class SmartTvDevice(name: String, category: String)
    : SmartDevice(nameDevice = name, categoryDevice = category) {

        override val deviceType = "Smart TV"
    /*private var speakerVolume = 5
        set(value) {
            if (value in 0..100) {
                field = value
            }
        }

    private var channelNumber = 1
        set(value) {
            if (value in 0..200) {
                field = value
            }
        }*/

    // delegate property
    private var speakerVolume by RangeRegulator(5, 0, 100)
    private var channelNumber by RangeRegulator(1, 0, 200)

    override fun turnOn() {
        super.turnOn()
        deviceStatus = "on"
        println("$name is turned on. Speaker volume is set to $speakerVolume and channel number is set to $channelNumber.")
    }

    override fun turnOff() {
        super.turnOff()
        deviceStatus = "off"
        println("$name is turned off")
    }

    fun increaseVolume() {
        speakerVolume++
        println("Speaker volume increased to $speakerVolume")
    }

    fun nextChannel() {
        channelNumber++
        println("Channel changed to $channelNumber")
    }
}

class SmartLightDevice(name: String, category: String)
    : SmartDevice(nameDevice = name, categoryDevice = category) {

        override val deviceType = "Smart Light"
        /*private var brightnessLevel = 0
            set(value) {
                if (value in 0..100) {
                    field = value
                }
            }*/

    // delegate property
    private var brightnessLevel by RangeRegulator(0, 0, 100)
        override fun turnOn() {
            super.turnOn();
            deviceStatus = "on"
            brightnessLevel = 2
            println("Smart light is turned on.")
        }

        override fun turnOff() {
            super.turnOff()
            deviceStatus = "off"
            brightnessLevel = 0
            println("Smart light is turned off.")
        }

        fun increaseBrightness() {
            brightnessLevel++
            println("Brightness level increased to $brightnessLevel")
        }
    }

class SmartHome(val smartTvDevice: SmartTvDevice, val smartLightDevice: SmartLightDevice) {
    var deviceTurnOnCount = 0
        private set
    fun turnOnTv() {
        deviceTurnOnCount++
        smartTvDevice.turnOn()
    }

    fun turnOffTv() {
        deviceTurnOnCount--
        smartTvDevice.turnOff()
    }

    fun increaseTvVolume() {
        smartTvDevice.increaseVolume()
    }

    fun channelTvChannelToNext() {
        smartTvDevice.nextChannel()
    }

    fun turnOnLight() {
        deviceTurnOnCount++
        smartLightDevice.turnOn()
    }

    fun turnOffLight() {
        deviceTurnOnCount--
        smartLightDevice.turnOff()
    }

    fun increaseLightBrightness() {
        smartLightDevice.increaseBrightness()
    }

    fun turnOffAllDevices() {
        turnOffTv()
        turnOffLight()
    }
}

// Belajar Delegasi Properti
class RangeRegulator(
    initialValue: Int,
    private val minValue: Int,
    private val maxValue: Int,
) : ReadWriteProperty<Any?, Int> {

    var fieldData = initialValue
    override fun getValue(thisRef: Any?, property: KProperty<*>): Int {
        return fieldData
    }

    override fun setValue(thisRef: Any?, property: KProperty<*>, value: Int) {
        if (value in minValue..maxValue) {
            fieldData = value
        }
    }
    // Metode ini bertindak sebagai fungsi pengambil dan penyetel properti.


}

fun main() {
   val smartHome: SmartHome = SmartHome(
       smartTvDevice = SmartTvDevice("Samsung TV", "Smart TV"),
       smartLightDevice = SmartLightDevice("Philips Hue", "Smart Light")
   )

    smartHome.turnOnTv()
    smartHome.turnOnLight()
    println("Total number of devices currently turned on: ${smartHome.deviceTurnOnCount}")
    println()

    smartHome.increaseTvVolume()
    smartHome.channelTvChannelToNext()
    smartHome.increaseLightBrightness()
    println()

    smartHome.turnOffAllDevices()
    println("Total number of devices currently turned on: ${smartHome.deviceTurnOnCount}.")

}

/*
* Kotlin menyediakan empat pengubah visibilitas: public, private, protected, dan internal.
* public. Pengubah visibilitas default. Menjadikan deklarasi dapat diakses di mana saja. Properti dan metode yang ingin Anda gunakan di luar class ditandai sebagai publik.
* private. Membuat deklarasi dapat diakses di class atau file sumber yang sama. Mungkin ada beberapa properti dan metode yang hanya digunakan di dalam class, dan Anda tidak ingin class lain menggunakannya. Properti dan metode ini dapat ditandai dengan pengubah visibilitas private untuk memastikan class lain tidak dapat mengaksesnya secara tidak sengaja.
* protected. Membuat deklarasi dapat diakses di subclass. Properti dan metode yang ingin Anda gunakan di class yang menentukannya dan subclass ditandai dengan pengubah visibilitas protected.
* internal. Membuat deklarasi dapat diakses di modul yang sama. Pengubah internal serupa dengan pribadi, tetapi Anda dapat mengakses properti dan metode internal dari luar class selama dapat diakses dalam modul yang sama.
* */

// open this link https://developer.android.com/codelabs/basic-android-kotlin-compose-classes-and-objects?hl=id&continue=https%3A%2F%2Fdeveloper.android.com%2Fcourses%2Fpathways%2Fandroid-basics-compose-unit-2-pathway-1%3Fhl%3Did%23codelab-https%3A%2F%2Fdeveloper.android.com%2Fcodelabs%2Fbasic-android-kotlin-compose-classes-and-objects