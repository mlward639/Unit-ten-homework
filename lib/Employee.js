class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee'
    }
    getName(){
        console.log(this.name);
        return this.name;
    }
    getId(){
        console.log(this.id);
        return this.id;
    }
    getEmail(){
        console.log(this.email);
        return this.email;
    }
    getRole(){
        return 'employee';
    }
}

/*Test example
const Nancy = new Employee('Nancy', 007, 'nancy@gmail.com')

Nancy.getName();
Nancy.getId();
Nancy.getEmail();
Nancy.getRole();
*/

  module.exports = Employee;

