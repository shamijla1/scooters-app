'use strict';

const express = require('express');
const controllers = require('./controllers');
const port = process.env.PORT || 5001;
const Http = require('http');
const app = express();
const http = new Http.Server(app);

app.use('/', controllers);
http.listen(port, function(){
  console.log('Scooters database server listening on port %s', port);
});


