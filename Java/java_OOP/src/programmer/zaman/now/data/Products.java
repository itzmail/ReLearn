package programmer.zaman.now.data;

public class Products {
    protected String name; // protected => hanya bisa diakses maksimal hanya sampai sesama package, diluar package tidak bisa
    protected int price;

    Products(String name, int price){
        this.name = name;
        this.price = price;
    }

}
