"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
const bai2_1 = require("./bai2");
const bai27_1 = require("./bai27");
class School {
    constructor() {
        this.members = [];
    }
    add(member) {
        this.members.push(member);
    }
    displayInfor() {
        this.members.forEach(member => {
            if (member instanceof bai27_1.Teacher)
                member.introduce();
            else if (member instanceof bai2_1.Student)
                member.displayInfor();
        });
    }
}
exports.School = School;
