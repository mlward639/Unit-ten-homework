# Unit-ten-homework

<img src='https://img.shields.io/badge/License-MIT-yellow.svg'>

## Description
This is a Node.js command-line application. It utilizes user input about a team of software engineering employees to generate an HTML webpage consisting of summaries for each employee. Employee information includes team manager name, employee ID, email address, office number, and GitHub username.  Application also includes unit tests for each part of the code. To demonstrate the functionality of the code, a walkthrough video is included.

## Table of Contents 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [Contribution Guidelines](#contribution-guidelines)
 - [Test Instructions](#test-instructions)
 - [License](#license)

## Installation
Use package.json to download dependencies (using npm install).

## Usage
In your terminal, invoke the application by typing the command 
    
    node index.js


When prompted in the terminal, enter appropriate responses regarding employee information.

On entering the team manager's name, employee ID, email address, and office number, the user can select from a menu the option to add an engineer or intern to the team.
* If engineer option is chosen, user is prompted to enter employee information (name, ID, email, GitHub username) before returning to the menu.
* If intern is selected, user is prompted to enter employee information (name, ID, email, school) before returning to the menu. 
* Once user is done creating a team, they select they are done creating their team and then exit the application and view the generated HTML.

Additional features for generated HTML opened in browser: 
* On clicking the email address in the HTML, the user's default email program opens and populates the email field with the email address entered.
* On clicking the GitHub username, the GitHub profile opens in a new tab.


## Credits
Jest to run unit tests.
Inquirer to collect input from the user.
Util for asynchronous function.
fs to access file system.
Bootstrap for CSS framework for cards.
Font awesome for icons.

## Contribution Guidelines
Utilize The Contributor Covenant (https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) as reference for appropriate contribution guidelines.

## Test Instructions
Open file in Integrated Terminal in Visual Studio Code. Run the following: 

    npm run test

## License
License type: MIT

    "Copyright 2021 <COPYRIGHT HOLDER>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."

Source for licensing information: <a href="https://opensource.org/licenses/MIT">Link to MIT license information</a>

## Screenshots

Screenshot of user-input:
<img src='images\screenshot-user-input.png' alt = 'screenshot of user input in terminal'>

Screenshot of generated HTML:
<img src='images\screenshot-generated-HTML.png' alt = 'screenshot of generated HTML'>


Screenshot of generated HTML webpage:
<img src='images\screenshot-generated-html-live-server.png' alt = 'screenshot of generated HTML opened in live server'>


## URLs
<a href="https://github.com/mlward639/Unit-ten-homework">Link to GitHub Repository</a>

<a href="https://drive.google.com/file/d/19SD1lJNA8_Y0oycaryXBdkn6WziutpBQ/view">Link to walkthrough video</a>
