"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat2 = exports.Dog2 = exports.Animal2 = void 0;
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return this.name + " đang kêu";
    }
}
exports.Animal2 = Animal2;
class Dog2 extends Animal2 {
    constructor(name) {
        super(name);
    }
    sound() {
        return super.sound() + " Woof woof!";
    }
}
exports.Dog2 = Dog2;
class Cat2 extends Animal2 {
    constructor(name) {
        super(name);
    }
    sound() {
        return super.sound() + " meow meow";
    }
}
exports.Cat2 = Cat2;
