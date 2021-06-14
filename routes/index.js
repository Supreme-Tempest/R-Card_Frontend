const express = require('express');
const router = express.Router();
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');

router.get('/', (req, res) => {
    console.log('user token: ', JSON.parse(localStorage.getItem('user')).token);
    res.render('index')
});

router.get('/testPost', (req, res) => {
    const data = {
        menssage: 'metodo post',
    };

    apiMethods.ApiPost(routes.testPost, data, res);
});

router.get('/testGet', (req, res) => {
    const data = {
        menssage: 'metodo get',
    };

    apiMethods.ApiGet(routes.testPost, data, res);
});

module.exports = router;
