const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "How would you describe your project?",
      },
      {
        type: "input",
        name: "installation",
        message: "How do you want to install your application?",
      },
      {
        type: "input",
        name: "usage",
        message: "What steps should one take to properly use your application?",
      },
      {
        type: "list",
        message: "What is your preferred license for your application?",
        name: "license",
        choices: [
          "MIT",
          "GNU AGPLv3",
          "Apache License 2.0",
        ]
      },
      {
        type: "input",
        name: "contribute",
        message: "How can people contribute?",
      },
      {
        type: "input",
        name: "test",
        message: "How can one test the functionality of your application?",
      },
      {
        type: "input",
        name: "questions",
        message: "Where can one go if they have any questions?",
      },
    ]
    )}

promptUser().then(function(answers){
    fs.writeFileSync("README.md", generateMarkdown(answers), function (err) {
        if (err) {
            throw (err);
        }
})
});




