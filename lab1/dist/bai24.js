"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = exports.Appliance = void 0;
class Appliance {
}
exports.Appliance = Appliance;
class Fan extends Appliance {
    constructor(speed) {
        super();
        this.speed = speed;
    }
    turnOn() {
        console.log("bat may quat voi toc do " + this.speed);
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    constructor(temp) {
        super();
        this.temp = temp;
    }
    turnOn() {
        console.log("bat may quat voi nhiet do " + this.temp + "℃");
    }
}
exports.AirConditioner = AirConditioner;
