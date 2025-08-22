export interface Flyable {
    name: String;

    fly() : void;
}

export interface Swimmable {
    name: String;

    swim() : void;
}

export class Bird implements Flyable {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
    fly(): void {
        console.log(this.name + " dang bay vu vu");
        
    }

    
}

export class Fish implements Swimmable {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
    swim(): void {
        console.log(this.name + " dang boi rat nhanh");
        
    }

    
}