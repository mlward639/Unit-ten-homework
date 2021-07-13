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
/*

class Shape { //we use the Shape class and to repace the parameters, we use the constructor below
    // Just like constructor functions, classes can accept arguments
    //class functions are very simple to constructor functions but are used more commonly 
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }
  
    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
  }
  
  const shape = new Shape(25, 25); 
  
  shape.printInfo(); */

  function test() {
      console.log('TESTTTTT')
    }

  module.exports = Employee;

