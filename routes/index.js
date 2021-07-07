const express = require('express');
const router = express.Router();
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');

router.get('/', (req, res) => {
    console.log('user token: ', JSON.parse(localStorage.getItem('user')).token);
    res.render('login')
});

router.get('/test', (req, res) => {
    //console.log('user token: ', JSON.parse(localStorage.getItem('user')).token);
    res.render('tools/Empleados')
});


module.exports = router;
