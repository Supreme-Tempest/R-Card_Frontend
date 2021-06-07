const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/singup', function(req, res, next) {
    res.render('singup', { title: 'Register' });
    //res.send('respond with a resource');
});

module.exports = router;
