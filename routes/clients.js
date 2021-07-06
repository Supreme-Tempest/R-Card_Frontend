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

router.get('/clientPage', (req, res) => {
    req.query = {
        page: 1,
        size: 3,
    }
    apiMethods.ApiGet(routes.clientPage, req, res, (e) => {
        console.log("responce", e.data);
    });
}); 

router.get('/new', (req, res) => {
    res.render('client/newClient')
});

router.get('/client', (req, res) => {
    res.render('client/listClient')
});

module.exports = router;
