import { Person } from "./bai1";

export class Student extends Person {
    private grade: number;  

    constructor(name: String, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    displayInfor(): void {
        console.log(this.name + "," + this.age + "," + this.grade);
        
    }
    
}