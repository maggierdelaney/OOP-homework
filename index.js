const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateHTML = require('./src/generate-html');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const { resolve } = require('path');

employeeArray = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the manager id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the manager email:',
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the manager office number:',
        },
    ])
        // .then(({ name, id, email, office }) => {
        //     return managerQuestions;
        // })
        .then(({ name, id, email, office }) => {
            const manager = new Manager(name, id, email, office)
            employeeArray.push(manager);
            mainMenu();
        })
};

const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: ["Add engineer", "Add intern", "No more, all done with my team"],
        }
    ])
        .then(({ menu }) => {
            if (menu === "Add engineer") {
                engineerQuestions();
            }
            if (menu === "Add intern") {
                internQuestions();
            }
            if (menu === "No more, all done with my team") {
                makeHTML();
            };
        })
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the engineer id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the engineer email:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineer github:',
        },
    ])
        // .then(({ name, id, email, github }) => {
        //     return engineerQuestions;
        // })
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github)
            employeeArray.push(engineer)
            mainMenu();
        })
};

const makeEngineerArray = () => {
    engineerArray.push(engineerQuestions);
    return engineerArray;
};
//have a separate function that makes new Engineer (new instance of a class)
//add to array just for engineers, and one for interns

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the intern id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the intern email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the intern school:',
        },
    ])
        // .then(({ name, id, email, school }) => {
        //     return internQuestions;
        // })
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school);
            employeeArray.push(intern);
            mainMenu();
        })
};

const makeInternArray = () => {
    internArray.push(internQuestions);
    return internArray;
};

const init = () => {
    managerQuestions()
};

init();

const makeHTML = () => {
    console.log(employeeArray);
    fs.writeFile('generated-html.html', generateHTML(employeeArray))
        .then(() => console.log('Successfully created HTML'))
        .catch((err) => console.error(err));
};

//for main menu, make as many engineers in a loop until they stop
// as many interns in a loop until they stop
//try to separate main menu into engineer, intern, and then another function generate html
//then use manager object, engineer array and then intern array