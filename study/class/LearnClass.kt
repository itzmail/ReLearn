// keyword open untuk menandakan kalau dia bisa diwariskan
open class SmartDevice protected constructor(val nameDevice: String = "", val categoryDevice: String = "") {
    var name = ""
    var category = ""
    var deviceStatus = ""
        protected set

    open val deviceType = "Unknown"

    constructor(nameDevice: String, categoryDevice: String, statusCode: Int) : this(nameDevice, categoryDevice) {
        name = nameDevice
        category = categoryDevice
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
    private var speakerVolume = 5
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
        }

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
        private var brightnessLevel = 0
            set(value) {
                if (value in 0..100) {
                    field = value
                }
            }

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
    var deviceTurnCount = 0
        private set
    fun turnOnTv() {
        deviceTurnCount++
        smartTvDevice.turnOn()
    }

    fun turnOffTv() {
        deviceTurnCount--
        smartTvDevice.turnOff()
    }

    fun increaseVolume() {
        smartTvDevice.increaseVolume()
    }

    fun channelTvChannelToNext() {
        smartTvDevice.nextChannel()
    }

    fun turnOnLight() {
        deviceTurnCount++
        smartLightDevice.turnOn()
    }

    fun turnOffLight() {
        deviceTurnCount--
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

fun main() {
    val smartTv: SmartDevice = SmartTvDevice("IOS TV", "TV")
    smartTv.turnOn()
    println(smartTv.deviceType)
}

/*
* Kotlin menyediakan empat pengubah visibilitas: public, private, protected, dan internal.
* public. Pengubah visibilitas default. Menjadikan deklarasi dapat diakses di mana saja. Properti dan metode yang ingin Anda gunakan di luar class ditandai sebagai publik.
* private. Membuat deklarasi dapat diakses di class atau file sumber yang sama. Mungkin ada beberapa properti dan metode yang hanya digunakan di dalam class, dan Anda tidak ingin class lain menggunakannya. Properti dan metode ini dapat ditandai dengan pengubah visibilitas private untuk memastikan class lain tidak dapat mengaksesnya secara tidak sengaja.
* protected. Membuat deklarasi dapat diakses di subclass. Properti dan metode yang ingin Anda gunakan di class yang menentukannya dan subclass ditandai dengan pengubah visibilitas protected.
* internal. Membuat deklarasi dapat diakses di modul yang sama. Pengubah internal serupa dengan pribadi, tetapi Anda dapat mengakses properti dan metode internal dari luar class selama dapat diakses dalam modul yang sama.
* */