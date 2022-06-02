fun main() {
    // agar compiler bisa membedakan mana yang null atau tidak diberi tanda tanya pada tipe data
    val text: String? = null;

    if(text != null){
        val textLength = text.length;
    } else {
        print("Text is Null");
    }
}