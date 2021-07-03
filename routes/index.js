const express = require('express');
const router = express.Router();
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');
const homeController = require('../controllers/home');

router.get('/', (req, res) => {
    console.log('user token: ', JSON.parse(localStorage.getItem('user')).token);
    homeController(res);
    res.render('index')
});

router.post('/testPost', (req, res) => {
    const data = {
        menssage: 'metodo post',
    };
    homeController(res);

    //apiMethods.ApiPost(routes.testPost, data, res);
    res.render('index');
});

router.get('/testGet', (req, res) => {
    const data = {
        menssage: 'metodo get',
    };
    //res.render('index');
    apiMethods.ApiGet(routes.testGet, data, res);
});

router.get('/test', (req, res) => {
    res.render('HTML/Login')
});

module.exports = router;
