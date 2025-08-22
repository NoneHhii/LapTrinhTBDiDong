export class Person {
    name: String;
    age: number;

    constructor(name: String, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfor() {
        console.log(this.name + "," + this.age);
        
    }
}