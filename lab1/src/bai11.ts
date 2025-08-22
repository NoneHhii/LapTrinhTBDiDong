import { Animal } from "./bai9";

export class AnimalBase implements Animal {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
    sound(): void {
        console.log(this.name + "đang kêu");
        
    }
}

export class Dog extends AnimalBase {
    constructor(name: String) {
        super(name);
    }

    sound() : void {
        this.bark();
    }

    bark() : void {
        console.log("Woof woof!");
        
    }
}

export class Cat extends AnimalBase {
    constructor(name: String) {
        super(name);
    }

    sound() : void {
        this.meow();
    }

    meow() : void {
        console.log("Meow meow!");
        
    }
}