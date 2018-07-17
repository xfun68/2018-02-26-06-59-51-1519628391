"use strict";

import _ from "lodash";

import Person from "../../src/practice_8/Person.js";

class Teacher extends Person {

    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.taughtClasses()}.`;
    }

    taughtClasses() {
        if (this.hasNoClasses()) {
            return "No Class";
        }

        let classNumberList = this.klasses.map(klass => klass.number).join(', ');
        return `Class ${classNumberList}`;
    }

    hasNoClasses() {
        return this.klasses === undefined || _.isEmpty(this.klasses);
    }

}

export default Teacher;
