const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = 'intern';
        this.school = school;
    }
    getSchool(){
        console.log(this.school);
        return this.school
    }
    getRole(){
        return 'intern';
    }
}

module.exports = Intern;

