const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    res.render('client/listClient')
});

router.get('/new', (req, res) => {
    res.render('client/newClient')
});

module.exports = router;
