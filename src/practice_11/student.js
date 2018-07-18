"use strict";

import Person from "../../src/practice_8/person.js";

class Student extends Person {

    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let introduction = `${super.introduce()} I am a Student. `;
        let appendix = (this === this.klass.leader) ? `I am Leader of Class ${this.klass.number}.` : `I am at Class ${this.klass.number}.`;
        return introduction + appendix;
    }

}

export default Student;
