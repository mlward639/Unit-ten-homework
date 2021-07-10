const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const questions = [
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'teamManagerName',
      },
      {
        type: 'input', 
        message: 'What is their employee ID?',
        name: 'employeeID',
      },
      {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber',
      },
      {
        type: 'input',  
        message: 'What is their GitHub username?',
        name: 'gitHubUsername',
      },
      //team manager up to here (teamManagerName, employeeID, email, officeNumber, gitHubUsername), then go to menu
      {
        type: 'list',  
        message: 'Add another employee to to the team.',
        name: 'menu',
        choices: ['engineer', 'intern', 'team is complete'],
      },
      {
        type: 'input',
        message: "What is your employee's name?",
        name: 'otherName',
      },
      //engineer includes otherName, employeeID, email, gitHubUsername. then go to menu.
      {
        type: 'input',
        message: "What school do you attend?",
        name: "school",
    },
    //intern includes otherName, employeeID, email, school
];

//function to initiate app
function init() {
    inquirer
      .prompt(questions)
      .then((res) => writeToFile('dist/team.html', createHTML(res))) 
      }
  
      
  // Function call to initialize app
  init();