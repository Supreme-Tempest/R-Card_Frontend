const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('purchase/newPurchase')
});

router.get('/register', (req, res) => {
    res.render('purchase/registerPurchase')
});

module.exports = router;
