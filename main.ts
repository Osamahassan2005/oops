import inquirer from "inquirer"
import chalk from "chalk";

let answers = await inquirer.prompt([
  { 
    type: 'input',
    name: 'name',
    message: chalk.blue('What is your name?')
  },
  {
    type: 'list',
    name: 'color',
    message: chalk.green('Choose your favorite color:'),
    choices: ['Red', 'Green', 'Blue']
  }
])
  console.log((`Hello, ${answers.name}! Your favorite color is ${answers.color}.`));