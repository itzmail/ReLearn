// keyword open untuk menandakan kalau dia bisa diwariskan
open class SmartDevice(val nameDevice: String = "", val categoryDevice: String = "") {
    var name = ""
    var category = ""
    var deviceStatus = ""

    constructor(nameDevice: String, categoryDevice: String, statusCode: Int) : this(nameDevice, categoryDevice) {
        name = nameDevice
        category = categoryDevice
        deviceStatus = when(statusCode) {
            0 -> "Offline"
            1 -> "Online"
            else -> "Unknown"
        }
    }
     open var speakerVolume = 2
        get() = field
        set(value) {
            if (value in 0..100) {
                field = value
            }
        }

    fun turnOn() {
        println("Smart divce is turned on.")
    }

    fun turnOff() {
        println("Smart divce is turned off.")
    }
}

class SmartTvDevice(name: String, category: String)
    : SmartDevice(nameDevice = name, categoryDevice = category) {

    override var speakerVolume = 5
        set(value) {
            if (value in 0..100) {
                field = value
            }
        }

    var channelNumber = 1
        set(value) {
            if (value in 0..200) {
                field = value
            }
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
        var brightnessLevel = 0
            set(value) {
                if (value in 0..100) {
                    field = value
                }
            }

        fun increaseBrightness() {
            brightnessLevel++
            println("Brightness level increased to $brightnessLevel")
        }
    }

fun main() {
    val learnClass = SmartDevice(nameDevice = "IOS TV", categoryDevice = "TV", statusCode = 1)
    println("Name: ${learnClass.name}")
    println("Category: ${learnClass.category}")
    println("Device Status: ${learnClass.deviceStatus}")
    learnClass.turnOn()
    learnClass.turnOff()
}