const mysql = require('mysql2');
const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/tracker_db');
const inquirer = require('inquirer');
// const { allowedNodeEnvironmentFlags } = require('process');

// const db = mysql.createConnection(
//     {
//         host: 'localhost',

//         user: 'root',

//         password: '',

//         database: 'tracker_db', 
//     }
// )

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "tracker_db",
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id" + connection.threadId);
  });

inquirer.prompt([{
    message: 'What would you like to do?',
    type: 'list',
    choices: ['Add a department', 'Add a role', 'Add an employee', 'View departments', 'View roles', 'View employees', 'Update an employee role'],
    name: 'objective',
},
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

    }
})

const addDepartment = () => {
    console.log('You are adding a department')
    inquirer.prompt([{
        message: 'What is the name of the department?',
        type: 'input',
        name: 'departmentName',
    }])
    .then(department => {
        console.log(department)
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