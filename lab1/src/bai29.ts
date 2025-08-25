export interface Movable {

    name: String;

    move() : void;
}

export class Car3 implements Movable {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    move(): void {
        console.log(`xe hoi ${this.name} dang chay ngoai duong`);
        
    }

}

export class Robot implements Movable {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    move(): void {
        console.log(`robot ${this.name} dang di bo trong phong thi nghiem`);
        
    }

}