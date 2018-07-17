"use strict";

import Person from "../../src/practice_5/Person.js";

class Teacher extends Person {

    constructor(name, age, klass) {
        super(name, age)
        this.klass = klass;
    }

    introduce() {
        let taughtClass = this.klass === undefined ? "No Class" : `${this.klass.getDisplayName()}`;
        return `${super.introduce()} I am a Teacher. I teach ${taughtClass}.`;
    }

    introduceWith(student) {
        let teachOrNot = student.klass === this.klass ? "teach" : "don't teach";
        return `${super.introduce()} I am a Teacher. I ${teachOrNot} ${student.name}.`;
    }

}

export default Teacher;
