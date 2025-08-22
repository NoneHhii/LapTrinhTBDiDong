export abstract class Shape {
    abstract area(): number;
}

export class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side*this.side;
    }
}

export class Circle extends Shape {
    r: number;

    constructor(r: number) {
        super();
        this.r = r;
    }

    area(): number {
        return this.r*3.14*this.r;
    }
}