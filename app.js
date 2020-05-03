#!/usr/bin/env node

/* the line up top requires us to run this file with a custom command. Also, we need to add some code into our package.json ... 

"bin": {
    "ncrypt": "./app.js"
}
*/

// import required dependencies
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');

// pull fonts from figlet .. let us decide which font is best.
// console.log(figlet.fontsSync());

// Templating the CLI

// Introduction

const init = () => {
    console.log(
        chalk.bold.magentaBright(
            figlet.textSync('N-Crypt', {
                font: 'Doom',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );
}

// ask user if we're going to Decrypt or Encrypt
const askUser = () => {
    inquirer
        .prompt([
            // ask to decrypt/encrypt
            "Decrypt[1] or Encrypt[2]"
        ])
        .then(answers => {

        })
        .catch(error => {
            if (error.isTtyError) {
                // prompt couldnt be rendered
                console.log('err');
            } else {
                // something else went wrong
                console.log('something else went wrong');
            }
        })
}

const run = async () => {
    // show script introduction
    init();
    askUser();
}

run();