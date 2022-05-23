package programmer.zaman.now.application;

import programmer.zaman.now.data.*; // tanda bintang tersebut artinya kita import semua java class yang ada di package data

public class Application {
    public static void main(String[] args) {
        Products products = new Products("Mac Book Pro", 1500);
        System.out.println(products.name);
        System.out.println(products.price);
    }
}
