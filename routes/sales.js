const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    res.render('sale/sale')
});

module.exports = router;
