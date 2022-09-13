package fundamental

fun main(args: Array<String>){
    val user = setUser("Ismail", 20);
    println(user);

    printUser("Alfian");
}

fun setUser(name: String, age: Int): String{
    return "Your name is $name and your age is $age";
}

fun printUser(name: String): Unit{
    println("My name is $name");
}