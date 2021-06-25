const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000/',
}

router.get('/', (req, res) => {
    //console.log('init test: ', localStorage.getItem('init'));
    //console.log('token: ', localStorage.getItem('token'));
    //console.log('username: ', localStorage.getItem('username'));
    //console.log('user token: ', JSON.parse(localStorage.getItem('user')).token);
    //console.log(localStorage.getItem('login'));
    res.render('index')
});

router.get('/inicio', (req, res) => {
    //console.log('init test: ', localStorage.getItem('init'));
    //console.log('token: ', localStorage.getItem('token'));
    //console.log('username: ', localStorage.getItem('username'));
    console.log('user token: ', JSON.parse(localStorage.getItem('user')).token);
    //console.log(localStorage.getItem('login'));
    res.render(302,'inicio');
});

router.get('/signup', (req, res) => {
    res.render('signup')
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
    /*localStorage.setItem('login', {
        login: 'yes',
        item: 'yes'
    });*/
    res.render('login')
});

router.post('/login', function(req, res, next) {
    //res.render('singup', { title: 'Register' });
    //res.send('respond with a resource');
    console.log('login post body: ', req.body);
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
            //const { token, role, username } = req.body.token;
            localStorage.setItem('user',JSON.stringify(response.data));
            //res.send(response.data);
            res.redirect('signup');
        })
        .catch((error) => {
            //console.log(error);
            res.send(error.message);
            console.log('No logro concetar a la direccion');
        });
});

module.exports = router;
