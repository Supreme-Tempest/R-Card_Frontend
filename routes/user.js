const express = require('express');
const router = express.Router();
const axios = require('axios');
const routes = require('./tools/routes');
const apiMethods = require('./tools/ApiRequest');
const apiOptions = {
    server: 'http://localhost:3000/',
}

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.post('/signup', (req, res, next) => {
    apiMethods.ApiPost(routes.users, req, res);
});

router.put('/signup', (req, res, next) => {
    apiMethods.ApiPut(routes.users, req, res);
});

router.login = (req, res) =>{
    console.log('login render');
    res.render('login');
}

router.get('/login', (req, res) => {
    router.login(req, res);
});

router.get('/logout', function(req,res,next){
    localStorage.setItem('user','');
    res.render('login');
})

router.post('/login', function(req, res, next) {
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
        localStorage.setItem('user',JSON.stringify(response.data));
        console.log('responce login');
        res.json({ok: true});
        })
        .catch((error) => {
        res.send(error.message);
        console.log('No logro concetar a la direccion');
        });
});

router.get('/workshop', (req, res) => {
    console.log('pre-workshop-apimethod');
    apiMethods.ApiGet(routes.workshop, req, res, (e) => {
        console.log("responce workshop", e);
    });
});

router.get('/roles', (req, res) => {
    console.log('pre-roles-apimethod');
    apiMethods.ApiGet(routes.rol, req, res, (e) => {
        console.log("responce rol", e);
    } 
    );
});

router.post('/userPage', (req, res) => {
    //console.log(req.body);
    apiMethods.ApiGet(routes.userPage, req, res, (e) => {
        //console.log("responce", e);
    });
});

module.exports = router;
