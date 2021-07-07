const express = require('express');
const router = express.Router();
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');
const apiOptions = {
    server: 'http://localhost:3000/',
}

router.get('/new', (req, res) => {
    res.render('purchase/newPurchase')
});

router.get('/register', (req, res) => {
    res.render('purchase/purchaseList')
});

router.get('/productPage', (req, res) => {
    console.log('productpage router', 'pre body');
    req.body = {
        page: 1,
        size: 3,
    }
    apiMethods.ApiGet(routes.productPage, req, res, (e) => {
        console.log("responce", e);
    });
}); 

module.exports = router;
