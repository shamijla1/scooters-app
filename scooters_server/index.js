'use strict';

const express = require('express');
const controllers = require('./controllers');
const port = process.env.SERVERPORT || 5000;
const Http = require('http');
const app = express();
const http = new Http.Server(app);

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Pass to next layer of middleware
  next();
});

app.use('/', controllers);
http.listen(port, function(){
  const scootersDbUrl = process.env.SCOOTERSDBURL || 'http://localhost:5001/api/scooters';
  console.log('Scooters server listening on port %s', port);
  console.log(scootersDbUrl);
});


