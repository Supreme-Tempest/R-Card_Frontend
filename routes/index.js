const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiOptions = {
  server: 'http://localhost:3000/',
}

const headServer = {
  method: 'get',
  headers: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibHVpc3QyMyIsInBhc3N3b3JkIjoiJDJhJDEwJHg2UEFPTmVVcVptazJDVXF3TG5SbS5zeEQ2UnJrSlFQTlFaYXA2UExrT1prT3Q5NnhEcFFpIiwiZW1haWwiOiJsdWlzdDIzQGNvcnJlby5jb20iLCJpc1ZlcmlmaWVkIjpudWxsLCJsYXN0bG9naW4iOiIyMDIxLTA2LTA4VDAxOjQ1OjM2LjYwMFoiLCJjcmVhdGVkQXQiOiIyMDIxLTA2LTA4VDAxOjAwOjAzLjAwOFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA2LTA4VDAxOjAwOjAzLjAwOFoifSwiaWF0IjoxNjIzMTE2ODI0LCJleHAiOjE2MjMxNjY4MjR9.qc66Mslyk64gj5NplDUD5V_6d80RNzRtBD781jWfGfg',
  },
  url: apiOptions.server + 'api'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('route');
  //res.render('index', { title: 'Express' });
  axios(headServer)
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
