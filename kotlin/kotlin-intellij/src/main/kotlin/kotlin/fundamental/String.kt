fun main() {
    val text = "Kotlin";
    /*for (char in text) {
        print("$char ");
    }*/
    val statement: String = "Kotlin is \"Awsome!\"";
    val name: String = "Unicode test: \u00A9";

    val line = """
        Line 1
        Line 2
        Line 3
        Line 4
    """.trimIndent();

    print(line);
}