const express = require('express');
const router = express.Router();
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');

router.get('/new', (req, res) => {
    res.render('purchase/newPurchase')
});

router.get('/register', (req, res) => {
    res.render('purchase/purchaseList',{
        levelAccessRol: JSON.parse(localStorage.getItem('user')).role.levelaccess,
    })
});

router.post('/productPage', (req, res) => {
    console.log(req.body);
    apiMethods.ApiGet(routes.productPage, req, res, (e) => {
        //console.log("responce", e);
    });
}); 

router.post('/product', (req, res) => {
    //console.log('product post router', 'pre body');
    apiMethods.ApiPost(routes.product, req, res, (e) => {
        //console.log("responce", e);
    });
}); 

router.put('/product', (req, res) => {
    //console.log('product put router', 'pre body');
    apiMethods.ApiPut(routes.product, req, res, (e) => {
        //console.log("responce", e);
    });
}); 

router.get('/productType', (req, res) => {
    //console.log('productType router', 'pre body');
    apiMethods.ApiGet(routes.productType, req, res, (e) => {
        //console.log("responce", e);
    });
}); 

router.post('/productId', (req, res) => {
    //console.log('productType router', 'pre body');
    apiMethods.ApiGet(routes.productid, req, res, (e) => {
        //console.log("responce", e);
    });
}); 

router.post('/productIdentificative', (req, res) => {
    console.log('productIdentificative router', req.body);
    console.log('productIdentificative router', req.params);
    apiMethods.ApiGet(routes.productIdentificative, req, res, (e) => {
        //console.log("responce", e);
    });
}); 

router.get('/productIdentificativeType', (req, res) => {
    apiMethods.ApiGet(routes.productIdentificativeType, req, res, (e) => {
        //console.log("responce", e);
    });
});

module.exports = router;
