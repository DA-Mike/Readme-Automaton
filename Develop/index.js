// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: "What is your project's title?",
    name: 'title',
},
{
    type: 'input',
    message: "Could you please provide a description of your project?",
    name: 'description',
},
{
    type: 'input',
    message: "Please enter a table of contents for the README:",
    name: 'contents',
},
{
    type: 'input',
    message: "What are the installation instructions?",
    name: 'installation',
},
{
    type: 'input',
    message: "Please provide usage information:",
    name: 'usage',
},
{
    type: 'input',
    message: "Please provide contribution guidelines:",
    name: 'contribution',
},
{
    type: 'input',
    message: "Please provide test instructions:",
    name: 'test',
},
{   type:'list',
    message: 'Which license would you like for your project?',
    name: 'license',
    choices: ['Apache License 2.0',
        'BSD 3',
        'BSD 2',
        'GPL',
        'LGPL',
        'MIT license',
        'Mozilla Public License 2.0',
        'ISC',
        'Eclipse Public License v2.0',
        'No License'
    ],
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => 
    err? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
        writeToFile('README.md', generateMarkdown(response))
    )
}

// Function call to initialize app
init();
