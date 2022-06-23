const inquirer = require('inquirer');
const utils = require("./utils/generateMarkdown");

console.log("Hello");
const userInput = [
    {
        type: 'input',
        name: 'repository',
        message: 'What is the title of your project? ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief descrpition of the project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project? ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Briefly explain the usage of this project: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to this code? ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project? ',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What License was used to create this project? ',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "BSD",
        ]
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub Username? ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address? ',
    },
]
inquirer.prompt(userInput).then((answers) => {
    console.log(answers);
    utils.generateMarkdown(answers);
}
