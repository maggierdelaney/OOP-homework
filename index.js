const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateHTML = require('./src/generate-html');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

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
        .then(({ name, id, email, office }) => {
            employeeArray.push(managerQuestions);
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
                init(employeeArray);
            };
        })
};


const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
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
        .then(({ name, id, email, github }) => {
            employeeArray.push(engineerQuestions);
            mainMenu();
        })
};


const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
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
        .then(({ name, id, email, school }) => {
            employeeArray.push(internQuestions);
            mainMenu();
        })
};




const init = () => {
    questions()
        .then((employeeArray) => writeFile('generated-html.html', generateHTML(employeeArray)))
        .then(() => console.log('Successfully created HTML'))
        .catch((err) => console.error(err));
};

init();