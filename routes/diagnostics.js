const express = require('express');
const router = express.Router();

router.get('/statistics', (req, res) => {
    res.render('diagnostic/stadistics')
});

module.exports = router;
