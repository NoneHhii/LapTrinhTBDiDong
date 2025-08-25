export class AnimalProtect {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    protected makeSound() : String {
        return `${this.name} dang keu `;
        
    }

    public speak() : void {
        console.log(this.makeSound());
        
    }
}

export class Cat3 extends AnimalProtect {

    constructor(name: String) {
        super(name);
    }

    protected makeSound(): String {
        return super.makeSound() + "meow meow";
    }
}

export class Dog3 extends AnimalProtect {

    constructor(name: String) {
        super(name);
    }

    protected makeSound(): String {
        return super.makeSound() + "woof woof";
    }
}