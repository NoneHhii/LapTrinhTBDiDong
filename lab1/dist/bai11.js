"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.AnimalBase = void 0;
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(this.name + "đang kêu");
    }
}
exports.AnimalBase = AnimalBase;
class Dog extends AnimalBase {
    constructor(name) {
        super(name);
    }
    sound() {
        this.bark();
    }
    bark() {
        console.log("Woof woof!");
    }
}
exports.Dog = Dog;
class Cat extends AnimalBase {
    constructor(name) {
        super(name);
    }
    sound() {
        this.meow();
    }
    meow() {
        console.log("Meow meow!");
    }
}
exports.Cat = Cat;
