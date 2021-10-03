const express = require('express')
const route = express.Router();
const { signUp, signIn, signUpAdmin } = require('./controllers/auth.controler')
const { addEmployee, getAllEmployees, getEmployee } = require('./controllers/adminController/employee.controller')


route.post('/signup_admin', signUpAdmin);
route.post('/signin', signIn);


route.post('/addEmpolyee', addEmployee);
route.get('/employees', getAllEmployees);
route.get('/employee/:id', getEmployee);
route.post('/signup', signUp);

module.exports = route;