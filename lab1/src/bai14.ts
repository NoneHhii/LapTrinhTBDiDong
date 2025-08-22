export class Employee {
    name: String;
    salary: number;

    constructor(name: String, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    work() : void {
        console.log(this.name + " working hard");
        
    }
}

export class Manager extends Employee {
    project: String;

    constructor(name: String, salary: number, project: String) {
        super(name, salary);
        this.project = project;
    }

    managerPj() : void {
        console.log(this.name + " quan ly du an: " + this.project);
        
    }
}

export class Developer extends Employee {
    programingLang: String;

    constructor(name: String, salary: number, programingLang: String) {
        super(name, salary);
        this.programingLang = programingLang;
    }

    code() : void {
        console.log(this.name + " dang code " + this.programingLang);
        
    }
}