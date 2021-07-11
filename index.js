const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const managerQuestions = [
    
    //team manager (teamManagerName, employeeID, email, officeNumber), then go to menu  
    {
      type: 'confirm', 
      message: 'Do you want to build your team?',
      name: 'start',
      //add if no, end 
    },
    {
      type: 'input',
      message: "What is your team manager's name?",
      name: 'managerName',
    },
    {
      type: 'input', 
      message: "What is your team manager's employee ID?",
      name: 'managerEmployeeID',
    },
    {
      type: 'input',
      message: "What is your team manager's email address?",
      name: 'managerEmail',
    },
    {
      type: 'input',
      message: "What is your team manager's office number?",
      name: 'managerOfficeNumber',
    },
    {
      type: 'list',  
      message: 'Add another employee to to the team.',
      name: 'menu',
      choices: ['engineer', 'intern', 'team is complete'],
    },
  ]

//function to ask manager questions then
function askManagerQuestions() {
  inquirer
    .prompt(managerQuestions)
    .then((res) => {
        //writeToFile('dist/team.html', createHTML(res)); //may need to change to make work for creating manager class separate then add manager class to HTML later or something
        console.log('res.menu', res.menu)
        menuChoices(res.menu);
    })
};

askManagerQuestions();

function menuChoices(res) {
    if (res === 'engineer') {
        console.log('chose engineer')
        askEngineerQuestions();
    } else if (res === 'intern') {
      console.log('chose intern')
        askInternQuestions();
    } else if (res === 'team is complete') {
      //function to generate HTML
      return console.log('Team is complete. Generating HTML.');
    }
}

function askEngineerQuestions(){
  inquirer
    .prompt(engineerQuestions)
    .then((res) => {
      //writeToFile('dist/team.html', createHTML(res)); //may need to change to make work for creating manager class separate then add manager class to HTML later or something
      menuChoices(res.menu);
  })}

function askInternQuestions(){
  inquirer
    .prompt(internQuestions)
    .then((res) => {
      //writeToFile('dist/team.html', createHTML(res)); //may need to change to make work for creating manager class separate then add manager class to HTML later or something
      menuChoices(res.menu);
  })}


     
//engineer includes name, employeeID, email, gitHubUsername. then go to menu.
const engineerQuestions = [
    {
      type: 'input',
      message: "What is your engineer's name?",
      name: 'engineerName',
    },
    {
      type: 'input', 
      message: "What is your engineer's employee ID?",
      name: 'engineerEmployeeID',
    },
    {
      type: 'input',
      message: "What is your engineer's email address?",
      name: 'engineerEmail',
    },
    {
      type: 'input',  
      message: "What is your engineer's GitHub username?",
      name: 'gitHubUsername',
    },
    {
      type: 'list',  
      message: 'Add another employee to to the team.',
      name: 'menu',
      choices: ['engineer', 'intern', 'team is complete'],
    },
  ];

//intern includes name, employeeID, email, school
const internQuestions = [
    {
      type: 'input',
      message: "What is your intern's name?",
      name: 'internName',
    },
    {
      type: 'input', 
      message: "What is your intern's employee ID?",
      name: 'internEmployeeID',
    },
    {
      type: 'input',
      message: "What is your intern's email address?",
      name: 'internEmail',
    },
    {
      type: 'input',
      message: "What is your intern's school?",
      name: "school",
    },
    {
      type: 'list',  
      message: 'Add another employee to to the team.',
      name: 'menu',
      choices: ['engineer', 'intern', 'team is complete'],
    },
]



// function to write to html file
function writeToFile(fileName, res) {
    fs.writeFile(fileName, res, (err) => {err ? console.error(err) : console.log('logged')})
}

//function to initiate app
/* function init() {
    inquirer
      .prompt(questions)
      .then((res) => writeToFile('dist/team.html', createHTML(res))) 
      }
  
      
  // Function call to initialize app
  init(); */