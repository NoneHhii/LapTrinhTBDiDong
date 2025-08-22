"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(this.name + " working hard");
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    constructor(name, salary, project) {
        super(name, salary);
        this.project = project;
    }
    managerPj() {
        console.log(this.name + " quan ly du an: " + this.project);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name, salary, programingLang) {
        super(name, salary);
        this.programingLang = programingLang;
    }
    code() {
        console.log(this.name + " dang code " + this.programingLang);
    }
}
exports.Developer = Developer;
