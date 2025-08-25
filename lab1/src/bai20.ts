export interface Vehicle {
    name: String;
    speed: number;

    drive() : void;

}

export class Car2 implements Vehicle {
    name: String;
    speed: number;

    constructor(name: String, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    drive(): void {
        console.log("Xe hoi " + this.name + " dang chay voi van toc: " + this.speed + "km/h");
        
    }
}

export class Bike2 implements Vehicle {
    name: String;
    speed: number;

    constructor(name: String, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    drive(): void {
        console.log("Xe dap " + this.name + " dang chay voi van toc: " + this.speed + "km/h");
        
    }
}