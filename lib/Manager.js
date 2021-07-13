const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.role = 'manager';
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }
    getRole() {
        return "manager"
    }
}

/* test
const Nancy = new Manager('Nancy', 8, 'fds@fsd.com', 9);
console.log(Nancy.name, Nancy.id, Nancy.email, Nancy.officeNumber)
Nancy.getOfficeNumber
Nancy.getRole */

module.exports = Manager;