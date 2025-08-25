"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog3 = exports.Cat3 = exports.AnimalProtect = void 0;
class AnimalProtect {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return `${this.name} dang keu `;
    }
    speak() {
        console.log(this.makeSound());
    }
}
exports.AnimalProtect = AnimalProtect;
class Cat3 extends AnimalProtect {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return super.makeSound() + "meow meow";
    }
}
exports.Cat3 = Cat3;
class Dog3 extends AnimalProtect {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return super.makeSound() + "woof woof";
    }
}
exports.Dog3 = Dog3;
