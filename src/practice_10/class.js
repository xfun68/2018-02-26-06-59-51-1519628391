"use strict";

class Class {

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (this.number != student.klass.number) {
            console.log("It is not one of us.");
            return;
        }
        this.leader = student;
    }

    appendMember(student) {
        student.klass = this;
    }
}

export default Class;
