import { Product } from "./bai8";

export class Order {
    products : Product[] = [];

    add(product: Product) : void {
        this.products.push(product);
    }

    totalPrice() : number {
        var total = 0;
        this.products.forEach((book) => total+=book.price);
        return total;
    }
}