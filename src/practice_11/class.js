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
        this.notifyLeaderAssigned(student);
    }

    appendMember(student) {
        student.klass = this;
        this.notifyMemberJoined(student);
    }

    notifyLeaderAssigned(student) {
        if (this.assignLeaderListener === undefined) {
            return;
        }
        this.assignLeaderListener.notifyLeaderAssigned(this.number, student.name);
    }

    notifyMemberJoined(student) {
        if (this.joinListener === undefined) {
            return;
        }
        this.joinListener.notifyNewMember(this.number, student.name);
    }

    registerAssignLeaderListener(listener) {
        this.assignLeaderListener = listener;
    }

    registerJoinListener(listener) {
        this.joinListener = listener;
    }
}

export default Class;
