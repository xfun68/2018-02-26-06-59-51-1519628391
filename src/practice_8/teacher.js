"use strict";

import Person from "../../src/practice_8/Person.js";

class Teacher extends Person {

    constructor(id, name, age, klass) {
        super(id, name, age)
        this.klass = klass;
    }

    introduce() {
        let taughtClass = this.klass === undefined ? "No Class" : `${this.klass.getDisplayName()}`;
        return `${super.introduce()} I am a Teacher. I teach ${taughtClass}.`;
    }

}

export default Teacher;
