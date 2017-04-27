/**
 * Created by wajidkhilji on 17/04/2017.
 */
'use strict';
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const braintree = require('braintree');

// Get our API routes
const api = require('./server/routes/api');

const app = express();
const jsonParser = bodyParser.json();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/src', express.static(path.join(__dirname, 'src')));

// Set our api routes
app.use('/api', api);

/**
 * Instantiate your gateway (update here with your Braintree API Keys)
 */
var gateway = braintree.connect({
  environment:  braintree.Environment.Sandbox,
  merchantId:   'kbqshh6ty6g6s5zf',
  publicKey:    '96ym5ghk6x73qx8x',
  privateKey:   'd0aeaebc0c4a990eb9e617c6a7708af2'
});

/**
 * Enable CORS (http://enable-cors.org/server_expressjs.html)
 * to allow different clients to request data from your server
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Route that returns a token to be used on the client side to tokenize payment details
 */
app.post('/api/v1/token', function (request, response) {
  gateway.clientToken.generate({}, function (err, res) {
    if (err) throw err;
    response.json({
      "client_token": res.clientToken
    });
  });
});

/**
 * Route to process a sale transaction
 */
app.post('/api/v1/process', jsonParser, function (request, response) {
  var transaction = request.body;
  gateway.transaction.sale({
    amount: transaction.amount,
    paymentMethodNonce: transaction.payment_method_nonce
  }, function (err, result) {
    if (err) throw err;
    console.log(util.inspect(result));
    response.json(result);
  });
});



// Catch all other routes and return the index file
app.get('*', function(req, res)  {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function() { console.log('API running on localhost:' + port)});
