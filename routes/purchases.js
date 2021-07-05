const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('purchases/ComprasNuevo')
});

router.get('/register', (req, res) => {
    res.render('purchases/ComprasRegistro')
});

module.exports = router;
