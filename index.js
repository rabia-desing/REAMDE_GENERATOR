// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is a Title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a Description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you Install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you Use your application?",
    name: "usage",
  },
  {
    type: "input",
    message: "How can people Contribute to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How do people update the tests for your project?",
    name: "tests"
  },
  {
    type: "checkbox",
    message: "What License did you use for this repository?",
    choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },
  {
    type: "input",
    message: "What is your email address where users and contributors can send questions?",
    name: "email"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log("Something went wrong");
    }
    else {
      console.log("readme generated");
    }
  })
}


// TODO: Create a function to initialize app
function init() {

  inquirer
    .prompt(questions)
    .then((response) => {
      const markdownData = generate(response);
      const fileName = "README.md";
      writeToFile(fileName, markdownData);
    });
}


// Function call to initialize app
init();
