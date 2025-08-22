export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area() {
        return (this.width + this.height) * 2;
    }

    perimeter() {
        return (this.width * this.height);
    }
}