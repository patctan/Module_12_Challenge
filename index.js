const mysql = require('mysql2');
// const db = mysql.createConnection('mysql://root:rootroot@localhost:3301/tracker_db');
const inquirer = require('inquirer');
// const { allowedNodeEnvironmentFlags } = require('process');


inquirer.prompt([{
    message: 'What would you like to do?',
    type: 'list',
    choices: ['Add department', 'Add role', 'Add employee', 'View departments', 'View roles', 'View employees', 'Update an employee role'],
    name: 'objective',
},
])
// .then ((objective) => {
//     console.log(objective);
    
// });
.then((objective) =>  {
    console.log(objective)
    switch(objective) {
        case 'Add a department':
            console.log('This is working');
            addDepartment();
        break;
        case 'Add a role':
            addRole();
        break;
        case 'Add an employee':
            addEmployee();
        break;
        case 'View departments':
            viewDepartments();
        break;
        case 'View roles':
            viewRoles();
        break;
        case 'View Employees':
            viewEmployees();
        break;
        case 'Update an employee role':
            updateEmployeeRole();

    }
})

const addDepartment = () => {
    console.log('You are adding a department')
    inquirer.prompt([{
        message: 'What is the name of the department?',
        type: 'input',
        name: 'name',
    }])
    .then(departmentName => {
        console.log(departmentName)
        db.query('INSERT INTO department SET ?', departmentName, err=> {
            if(err) {console.log(err)}
        })
        console.log('Yay! You just added the department!')
    })
};

const addRole = () => {};

const addEmployee = () => {};

const viewDepartments = () => {};

const viewRoles = () => {};

const viewEmployees = () => {};

const updateEmployeeRole = () => {};