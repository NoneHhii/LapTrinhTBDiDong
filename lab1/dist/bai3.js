"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInforCar() {
        console.log(this.brand + "," + this.model + "," + this.year);
    }
}
exports.Car = Car;
