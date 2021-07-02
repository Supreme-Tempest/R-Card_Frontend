//const express = require('express');
//const router = express.Router();
const axios = require('axios');
const apiOptions = {
    server: 'http://localhost:3000/api/',
}

const ApiPost = (route, data, res) => {
    ApiResponce('post', route, data, res);
}

const ApiGet = (route, data, res) => {
    ApiResponce('get', route, data, res);
}

const ApiResponce = (method, route, data, res) => {
    axios({
        method: method,
        url: apiOptions.server + route,
        data: data,
        headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
        },
    })
        .then((response) => {
        res.send(response.data);
        })
        .catch((error) => {
        res.send(error.message);
        console.log('No logro concetar a la direccion');
        })
        .then(() => {
        console.log('goal :v');
    });
}

module.exports = {
    ApiPost: ApiPost,
    ApiGet: ApiGet,
};
