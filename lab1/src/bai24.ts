export abstract class Appliance {

    abstract turnOn() : void;
}

export class Fan extends Appliance {
    private speed: number;

    constructor(speed: number) {
        super();
        this.speed = speed;
    }

    turnOn(): void {
        console.log("bat may quat voi toc do " + this.speed);
    }

}

export class AirConditioner extends Appliance {
    private temp: number;

    constructor(temp: number) {
        super();
        this.temp = temp;
    }

    turnOn(): void {
        console.log("bat may quat voi nhiet do " + this.temp + "℃");
    }

}