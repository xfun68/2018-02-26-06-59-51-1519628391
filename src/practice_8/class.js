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
            return;
        }
        this.leader = student;
    }

}

export default Class;
