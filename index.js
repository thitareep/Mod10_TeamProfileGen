// Required: Inquirer Package | https://www.npmjs.com/package/inquirer/v/8.2.4 //
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

let team = [];

// Questions for user input //
const questions = {
    // Input info for Manager //
    Manager: [
        {
            type: 'input',
            name: 'name',
            message: "Please enter manager name.",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log ("Please enter manager name to continue.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager ID.",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log ("Please enter manager ID to continue.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                console.log ("Please enter an email address to continue.")
                return false;
                }
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true
                } else {
                    console.log ("Please enter an office number.")
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
        }
    ],

    // Input info for Engineer //
    Engineer: [
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer name.",
            validate: nameInput => {
                if (nameInput) {
                    return true 
                } else {
                    console.log ("Please enter a name to continue.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer email address.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                console.log ("Please enter an email address to continue.")
                return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username."
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log ("Please enter a GitHub username to continue.")
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
        }
    ],

    // Input info for Intern //
    Intern: [
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern name."
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log ("Please enter a name to continue.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern email address."
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                console.log ("Please enter an email address to continue.")
                return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school'
            message: "Please enter name of the intern's school."
            validate: schoolInput => {
                if (schoolInput) {
                    return true
                } else {
                    console.log ("Please enter a school name to continue.")
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
        }
    ]
};

// Select the employee role type: Manager, Engineer, or Intern //
const EmployeeRoleType = [
    {
        type: 'list',
        name: 'roleType',
        message: "Please select the employee role type."
        choices: ["Manager", "Engineer", "Intern",]
    }
];

