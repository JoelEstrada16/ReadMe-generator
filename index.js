
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
     type: 'input',
     name: 'title',
     message: 'What is the name of your app',
    },
    {
     type: 'input',
     name: 'description',
     message: 'Tell us about your app',
    },
    {
     type: 'list',
     name: 'license',
     message: 'What license does this repo have',
     choices: ['mit','apache 2.0','gpl 3.0','bsl 1.0', 'None']   
    },
    {
     type: 'input',
     name: 'installation',
     message: 'How do you install this project',
    },
    {
     type: 'input',
     name: 'usage',
     message: 'How do you use this project',
    },
    {
     type: 'input',
     name: 'contributing',
     message: 'how can pthers contribute to your project',
    },
    {
     type: 'input',
     name: 'tests',
     message: 'Describe the tests written for your application and how to use them',
    },
    {
     type: 'input',
     name: 'github',
     message: 'Display your github username so others can reach you',
    },
    {
     type: 'input',
     name: 'email',
     message: 'Display your email address so others can reach you',
    },
    {
     type: 'input',
     name: 'name',
     message: 'what is your name',
    }
]; 

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
        fs.writeFile('README.md', generateMarkdown(answers), err => {
            if (err) return console.err(err);

            console.log('README generated successfully')
        })
        console.log(generateMarkdown(answers))
    })
}


init();
