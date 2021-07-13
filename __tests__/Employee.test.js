const Employee = require('../lib/Employee');

const nancy = new Employee('Nancy', 007, 'nancy@gmail.com')




Nancy.getName();
Employee.getId(Nancy);
Employee.getEmail(Nancy);
Employee.getRole(Nancy);
