// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const utils = require(`./utils/generateMarkdown`);
// TODO: Create an array of questions for user input
const questions = [
        {
            type: `input`,
            message: `What is the name of your project?`,
            name: `project`
        },
        {
            type: `input`,
            message: `Enter a description of your application.`,
            name: `description`
        },
        {
            type: `input`,
            message: `What are the installation instructions for your project?`,
            name: `installation`
        },
        {
            type: `input`,
            message: `What is the usage information for your project?`,
            name: `usage`
        },
        {
            type: `list`,
            message: `Which license would you like to use?`,
            name: `license`,
            choices: [`BSD`, `MIT`, `GPL`]
        },
        {
            type: `input`,
            message: `What are your testing instructions?`,
            name: `test`
        },
        {
            type: `input`,
            message: `What is your github username?`,
            name: `github`
        },
        {
            type: `input`,
            message: `What is your email address?`,
            name: `email`
        }
    ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(questions)
        .then((data) => {
            
            const markDown = utils.generateMarkdown(data)
            fs.writeFile(`${data.project}.md`, markDown, function(err) {
                if (err) {
                    console.log(err, `File could not be saved!`)
                } else {
                    console.log(`Success: Your new README has been generated successfully!`)
                }
            })
        })
        .catch((error) => {
            console.log(error);
        })
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();