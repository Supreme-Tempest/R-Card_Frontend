const express = require('express');
const router = express.Router();

router.get('/Employees', (req, res) => {
    
    res.render('Employee/Empleados', { 
        levelAccessRol: JSON.parse(localStorage.getItem('user')).role.levelaccess,
    })
});

router.get('/EmployeeC', (req, res) => {
    res.render('Employee/EmployeeCreate')
});

router.get('/EmployeeI', (req, res) => {
    res.render('Employee/EmployeeInfo')
});

module.exports = router;