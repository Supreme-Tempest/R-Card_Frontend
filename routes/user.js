const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000/',
}

router.get('/', (req, res) => {
    console.log(localStorage.getItem('init'));
    console.log(localStorage.getItem('user'));
    res.render('register')
});

router.get('/signup', (req, res) => {
    res.render('user/signup')
});

router.post('/signup', function(req, res, next) {
    console.log(req.body);
    axios({
        method: 'post',
        url: apiOptions.server + 'auth/v1/register',
        data: {
        
            username: req.body.username, 
            password: req.body.password, 
            email: req.body.email
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

router.get('/login', (req, res) => {
    res.render('user/login')
});

router.post('/login', function(req, res, next) {
    //res.render('singup', { title: 'Register' });
    //res.send('respond with a resource');
    console.log(req.body);
    axios({
        method: 'post',
        url: apiOptions.server + 'auth/v1/login',
        data: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then((response) => {
        //console.log(response);
        localStorage.setItem('user',res.data);
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
