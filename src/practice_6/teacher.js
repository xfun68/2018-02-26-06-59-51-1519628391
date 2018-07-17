"use strict";

import Person from "../../src/practice_5/Person.js";

class Teacher extends Person {

    constructor(name, age, klass) {
        super(name, age)
        this.klass = klass;
    }

    introduce() {
        let taughtClass = this.klass === undefined ? "No Class" : `Class ${this.klass}`;
        return `${super.introduce()} I am a Teacher. I teach ${taughtClass}.`;
    }

}

export default Teacher;
