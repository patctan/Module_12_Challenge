const mysql = require('mysql2');
const db = mysql.createConnection('mysql://root:rootroot@localhost:3301/tracker_db');
const inquirer = require('inquirer');


inquirer.prompt([{
    message: 'What would you like to do?',
    type: 'list',
choices: ['Add department', 'Add role', 'Add employee', 'View departments', 'View roles', 'View employees', 'Update employee role'],
name: 'init'
}
])
.then(init=> {
    console.log(init)
})