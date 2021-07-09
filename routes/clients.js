const express = require('express');
const router = express.Router();
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');
const apiOptions = {
    server: 'http://localhost:3000/',
}

router.get('/client_list', (req, res) => {
    apiMethods.ApiGet(routes.client, {}, res);
}); 

router.post('/clients', (req, res) => {
    console.log(req);
    apiMethods.ApiPost(routes.client, req, res);
}); 

router.post('/clientPage', (req, res) => {
    console.log('clientpage router', 'pre body', req.body);
    apiMethods.ApiGet(routes.clientPage, req, res, (e) => {
        console.log("responce", e);
    });
}); 

router.get('/new', (req, res) => {
    res.render('client/newClient')
});

router.get('/client', (req, res) => {
    res.render('client/listClient')
});

module.exports = router;
