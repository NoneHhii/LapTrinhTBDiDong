import { Person } from "./bai1";

export class Teacher extends Person {
    private subject: String;

    constructor(name: String, age: number, subject: String) {
        super(name, age);
        this.subject = subject;
    }

    introduce() : void {
        console.log(`Giang vien ${this.name}, ${this.age} tuoi, day mon ${this.subject}`);
        
    }
}