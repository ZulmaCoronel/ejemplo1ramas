const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const wagner = require('wagner-core');
const path = require('path');

const URL = `/naldeportivo`;

// MODELS
require('./models/models')(wagner);


//const usuario = require('./router/user.router.js')(wagner);
//const noticias = require('./router/noticias.router.js')(wagner);
const trabajador = require('./router/trabajador.router.js')(wagner);

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// ROUTERS

const uri = '/usuarios/v1/';
//app.use(uri+'usuario', usuario);
//app.use(uri+'noticias', noticias);
app.use(uri+'trabajador', trabajador);
module.exports = app;