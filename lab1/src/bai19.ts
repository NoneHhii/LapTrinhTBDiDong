export class Animal2 {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
    sound(): String {
        return this.name + " đang kêu";
        
    }
}

export class Dog2 extends Animal2 {
    constructor(name: String) {
        super(name);
    }

    sound() : String {
        return super.sound() + " Woof woof!";
    }
}

export class Cat2 extends Animal2 {
    constructor(name: String) {
        super(name);
    }

    sound() : String {
        return super.sound() + " meow meow";
    }
}