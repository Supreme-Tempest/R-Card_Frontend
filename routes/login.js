const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000/',
}

/* GET users listing. */
router.get('/singup', function(req, res, next) {
    //res.render('singup', { title: 'Register' });
    //res.send('respond with a resource');
    axios({
        method: 'post',
        url: apiOptions.server + 'auth/v1/register',
        data: {
            username: 'luist23', 
            password: '12345', 
            email: 'luist23@correo.com'
        }
    })
        .then((response) => {
        //console.log(response);
        res.send(response.data);
        })
        .catch((error) => {
        //console.log(error);
        res.send(error.message);
        console.log('No logro concetar a la direccion');
        })
        .then(() => {
        // always executed
        console.log('goal :v');
    });
});

router.get('/login', function(req, res, next) {
    //res.render('singup', { title: 'Register' });
    //res.send('respond with a resource');
    axios({
        method: 'post',
        url: apiOptions.server + 'auth/v1/login',
        data: {
            username: 'luist23', 
            password: '12345', 
            email: 'luist23@correo.com'
        }
    })
        .then((response) => {
        //console.log(response);
        res.send(response.data);
        })
        .catch((error) => {
        //console.log(error);
        res.send(error.message);
        console.log('No logro concetar a la direccion');
        })
        .then(() => {
        // always executed
        console.log('goal :v');
    });
});

module.exports = router;
