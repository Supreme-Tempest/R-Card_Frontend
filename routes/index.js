const express = require('express');
const router = express.Router();
const request = require("request");
const apiOptions = {
  server: 'http://localhost:3000/',
}

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('route');
  request.get(apiOptions.server, (error, response, body) => {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      res.send(error);
    } else {
      res.send(body);
    }
    //console.log('responce', response);
  });
});

module.exports = router;
