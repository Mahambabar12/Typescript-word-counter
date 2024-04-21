#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

const answers :{Sentence:string} = await inquirer.prompt([
    {
    name: 'Sentence',
    type: 'input',
    message: chalk.bold.magentaBright('Enter your sentence to count the word:')
}
])

const words = answers.Sentence.trim().split(" ") 
console.log(words);
console.log(chalk.bold.italic.bgMagenta(`*************** your sentence words counting is ${words.length} ***************`));

