"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor() {
        this.products = [];
    }
    add(product) {
        this.products.push(product);
    }
    totalPrice() {
        var total = 0;
        this.products.forEach((book) => total += book.price);
        return total;
    }
}
exports.Order = Order;
