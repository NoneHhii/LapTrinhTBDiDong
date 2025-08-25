"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = exports.Car3 = void 0;
class Car3 {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`xe hoi ${this.name} dang chay ngoai duong`);
    }
}
exports.Car3 = Car3;
class Robot {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`robot ${this.name} dang di bo trong phong thi nghiem`);
    }
}
exports.Robot = Robot;
