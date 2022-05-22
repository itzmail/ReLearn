package programmer.zaman.now.data;

public class ProductsApp {
    public static void main(String[] args){
        Products products = new Products("Macbook pro m1", 15000000);

        System.out.println(products.name);
        System.out.println((products.price));
    }
}