package programmer.zaman.now.application;

import programmer.zaman.now.data.*;

public class AnimalApp {
    public static void main(String[] args){
        Animal animal = new Cat(); // contoh penerapan polymorphism
        animal.name = "Puss Meong";
        animal.run();

    }
}
