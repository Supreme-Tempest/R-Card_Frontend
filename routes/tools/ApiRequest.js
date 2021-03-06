//const express = require('express');
//const router = express.Router();
const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000/api/',
}
//const login = require('../user');

const ApiPost = (route, req, res, e) => {
    ApiResponce('post', route, req, res, e);
}

const ApiGet = (route, req, res, e) => {
    let query = Object.keys(req.body).map(k => `${k}=${req.body[k]}`).join('&');
    ApiResponce('get', route + '?' + query, req, res, e);
}

const ApiPut = (route, req, res, e) => {
    ApiResponce('put', route, req, res, e);
}

const ApiDelete = (route, req, res, e) => {
    ApiResponce('delete', route, req, res, e);
}

const ApiResponce = (method, route, req, res, e) => {
    //console.log('apiRespone','pre-token');
    if (localStorage.getItem('user') == '') {
        //console.log('apiRespone','no session');
        res.redirect('/login');
        return
    }
    axios({
        method: method,
        url: apiOptions.server + route,
        data: req.body,
        headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
        },
    })
        .then((response) => {
            //console.log('responce', response);
            if (e) {
                e(response.data);
            }
            if (response.data.code === 4012) {
                //console.log('responce', response.data);
                //res.redirect('/logout');
            } else {
                res.send(response.data);
            }
        })
        .catch((error) => {
        res.send(error.message);
        console.log('No logro concetar a la direccion', error.message);
        })
        .then(() => {
        //console.log('goal :v');
    });
}

module.exports = {
    ApiPost: ApiPost,
    ApiGet: ApiGet,
    ApiPut: ApiPut,
    ApiDelete: ApiDelete,
};
