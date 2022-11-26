const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


const question = () => {

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Dongka1993!",
    database: "tracker_db",
  });
  
  db.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id" + db.threadId);
  });

inquirer.prompt([{
    message: 'What would you like to do?',
    type: 'list',
    choices: ['Add a department', 'Add a role', 'Add an employee', 'View departments', 'View roles', 'View employees', 'Update an employee role'],
    name: 'objective',
}
])
.then((objective) =>  {
    console.log(objective)
    switch(objective.objective) {
        case 'Add a department':
            console.log('This is working')
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
        break;

    }
});

const addDepartment = () => {
    console.log('This is working')
    inquirer.prompt([{
        message: 'What is the name of the department?',
        type: 'input',
        name: 'name',
    }])
    .then(department => {
        console.log(department)
        db.query('INSERT INTO department SET ?', department, err=> {
            if(err) {console.log(err)}
        })
        console.log('Yay! You just added the department!')
    })
};

const addRole = () => {
    console.log('This is working')
    inquirer.prompt([{
        message: 'What is the title of the role?',
        type: 'input',
        name: 'title',
    },
    {   message: 'what is the id of the role?',
        type: 'input',
        name: 'department_id',},
    {   message: 'what is the salary of the role?',
        type: 'input',
        name: 'salary',},
    ])
    .then(role => {
        console.log(role)
        db.query('INSERT INTO roles SET ?', role, err=> {
            if(err) {console.log(err)}
        })
        console.log('Yay! You just added the role!')
    })
}};

question();

const addEmployee = () => {};

const viewDepartments = () => {};

const viewRoles = () => {};

const viewEmployees = () => {};

const updateEmployeeRole = () => {};