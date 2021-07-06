const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    apiMethods.ApiGet(routes.client, {}, res);
}); 

router.get('/new', (req, res) => {
    res.render('client/newClient')
});

router.get('/client', (req, res) => {
    res.render('client/listClient')
});

module.exports = router;
