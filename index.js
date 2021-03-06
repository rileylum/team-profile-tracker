const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/htmlHelper');

// prompt user for question to create an Manager Object
const getManagerQuestions = () => {
    return Promise.resolve([
        {
            type: 'input',
            name: 'name',
            message: 'Please input the Team Manager\'s name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please input the Team Manager\'s employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input the Team Manager\'s email'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please input the Team Manager\'s office number'
        }
    ])
}
// Prompt the user if they want to add an Engineer or Intern to the team, or if they are finished
const getMenuQuestions = () => {
    return Promise.resolve([
        {
            type: 'list',
            name: 'choice',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team']
        }
    ])
}
// prompt user for question to create an Engineer Object
const getEngineerQuestions = () => {
    return Promise.resolve([
        {
            type: 'input',
            name: 'name',
            message: 'Please input the Engineer\'s name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please input the Engineer\'s employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input the Engineer\'s email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please input the Engineer\'s github'
        }
    ])
}
// prompt user for question to create an Intern Object
const getInternQuestions = () => {
    return Promise.resolve([
        {
            type: 'input',
            name: 'name',
            message: 'Please input the Intern\'s name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please input the Intern\'s employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input the Intern\'s email'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please input the Intern\'s school'
        }
    ])
}

// create a index.html file in the dist folder given a formatted string
const createHTMLFile = (html) => {
    fs.writeFile('./dist/index.html', html, (e) => {
        if (e) throw e;
    });
}

async function init() {
    // empty array to store added teamMemebrs
    let teamMembers = [];
    // get inquirer question arrays
    const managerQuestions = await getManagerQuestions();
    const menuQuestions = await getMenuQuestions();
    const engineerQuestions = await getEngineerQuestions();
    const internQuestions = await getInternQuestions();

    // get team manager information
    manager = await inquirer.prompt(managerQuestions);
    // add manager to team array
    teamMembers.push(new Manager(manager.name, manager.id, manager.email, manager.office))

    // loop through menu adding engineers and interns until user selects finish
    do {
        menuAnswer = await inquirer.prompt(menuQuestions);
        if (menuAnswer.choice === 'Add an Engineer') {
            engineer = await inquirer.prompt(engineerQuestions);
            teamMembers.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github))
        } else if (menuAnswer.choice === 'Add an Intern') {
            intern = await inquirer.prompt(internQuestions);
            teamMembers.push(new Intern(intern.name, intern.id, intern.email, intern.school))
        }
    } while (menuAnswer.choice != 'Finish Building Team')
    // get HTML from helper function
    const html = await generateHTML(teamMembers);
    // create index HTML file
    createHTMLFile(html);
}


init();
