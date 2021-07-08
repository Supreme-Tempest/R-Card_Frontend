const express = require('express');
const router = express.Router();

router.get('/Employees', (req, res) => {
    res.render('Employee/Empleados')
});

router.get('/EmployeeC', (req, res) => {
    res.render('Employee/EmployeeCreate')
});

router.get('/EmployeeI', (req, res) => {
    res.render('Employee/EmployeeInfo')
});

module.exports = router;