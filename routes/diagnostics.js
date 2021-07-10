const express = require('express');
const router = express.Router();
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');

router.get('/stadistics', (req, res) => {
    res.render('diagnostic/stadistics')
});

router.get('/diagnoticfacture', (req, res) => {
    apiMethods.ApiGet(routes.diagnosticFacture, req, res);
}); 

router.get('/diagnoticproduct', (req, res) => {
    apiMethods.ApiGet(routes.diagnosticProduct, req, res);
}); 

router.get('/diagnoticproductsaledesc', (req, res) => {
    apiMethods.ApiGet(routes.diagnosticProductSalDesc, req, res);
}); 

router.get('/diagnoticproductsaleasc', (req, res) => {
    apiMethods.ApiGet(routes.diagnosticProductSalAsc, req, res);
}); 

module.exports = router;
