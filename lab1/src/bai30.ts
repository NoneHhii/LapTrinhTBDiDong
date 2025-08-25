import { Student } from "./bai2";
import { Teacher } from "./bai27";

export class School {
    members: (Teacher | Student)[] = [];

    add(member: (Teacher | Student)) : void {
        this.members.push(member);
    }

    displayInfor() : void {
        this.members.forEach(member => {
            if(member instanceof Teacher) member.introduce();
            else if(member instanceof Student) member.displayInfor();
        });
    }
}