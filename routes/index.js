const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiOptions = {
  server: 'http://localhost:3000/',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('route');
  //res.render('index', { title: 'Express' });
  axios.get(apiOptions.server, {})
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
