const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role = 'engineer'
    }
    getGithub(){
        console.log(this.github);
        return this.github
    }
    getRole(){ //make sure overridden to return 'Engineer' {
        return 'engineer'
    }
}

module.exports = Engineer;