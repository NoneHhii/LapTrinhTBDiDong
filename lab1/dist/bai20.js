"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike2 = exports.Car2 = void 0;
class Car2 {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    drive() {
        console.log("Xe hoi " + this.name + " dang chay voi van toc: " + this.speed + "km/h");
    }
}
exports.Car2 = Car2;
class Bike2 {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    drive() {
        console.log("Xe dap " + this.name + " dang chay voi van toc: " + this.speed + "km/h");
    }
}
exports.Bike2 = Bike2;
