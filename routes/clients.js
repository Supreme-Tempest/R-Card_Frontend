const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    res.render('clients/list_clients')
});

router.get('/new', (req, res) => {
    res.render('clients/new_client')
});

module.exports = router;
