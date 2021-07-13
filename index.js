const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const util = require('util');
const pageTemplate = require('./src/page-template.js');

const writeFileAsync = util.promisify(fs.writeFile);
//const test='testtt'
//pageTemplate.checkConnected(test)

//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

const managerQuestions = [
    //team manager (teamManagerName, employeeID, email, officeNumber), then go to menu  
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

//function to ask manager questions then
function askManagerQuestions() {
  inquirer
    .prompt(managerQuestions)
    .then((res) => {
        //console.log(`name: ${res.managerName}, ID: ${res.managerEmployeeID}, Email: ${res.managerEmail}, Office number: ${res.managerOfficeNumber}`)
        //console.log('res', res);
        const initialHTML = pageTemplate.createInitialHTML(res);
        //console.log("TEST", pageTemplate.createInitialHTML(res));
        writeFileAsync('./output/teamFile.html', initialHTML); //may need to change to make work for creating manager class separate then add manager class to HTML later or something
        //console.log('res.menu', res.menu)
        menuChoices(res.menu);
    })
    .catch((err) => err ? console.error(err) : console.log(''))
};

//initiate prompts
askManagerQuestions();

//path to follow based on user input (questions for engineer, intern, or done adding)
function menuChoices(res) {
    if (res === 'engineer') {
        console.log('chose engineer')
        askEngineerQuestions();
    } else if (res === 'intern') {
        console.log('chose intern')
        askInternQuestions();
    } else if (res === 'team is complete') {
        appendEndHTML();
        return console.log('Team is complete. Generating HTML.');
    }
}

//if user selects to add an engineer, run this function to run through the engineer prompts and create engineer card in html
function askEngineerQuestions(){
  inquirer
    .prompt(engineerQuestions)
    .then((res) => {
      //writeToFile('dist/team.html', createHTML(res)); //may need to change to make work for creating manager class separate then add manager class to HTML later or something
      const engineerCardHTML = pageTemplate.createEngineerCardHTML(res);
      fs.appendFile('./output/teamFile.html', engineerCardHTML, (err) => err ? console.error(err) : console.log(''));
      menuChoices(res.menu); //this is running before the appendFile is done so the endHTML part is coming before the engineer or intern card are added. how would you do a promise with this? try await with this?
    })
}

//if user selects to add an intern, run this function to run through the intern prompts and create intern card in html
function askInternQuestions(){
  inquirer
    .prompt(internQuestions)
    .then((res) => {
      //writeToFile('dist/team.html', createHTML(res)); //may need to change to make work for creating manager class separate then add manager class to HTML later or something
      const internCardHTML = pageTemplate.createInternCardHTML(res);
      fs.appendFile('./output/teamFile.html', internCardHTML, (err) => err ? console.error(err) : console.log(''));
      menuChoices(res.menu); 
    })
}

//if user selects they are done building their team, run this function to create the end of the html file
function appendEndHTML() {
    const endHTML = pageTemplate.createEndHTML();
    fs.appendFile('./output/teamFile.html', endHTML, (err) => err ? console.err(err) : console.log('logged'))
}
