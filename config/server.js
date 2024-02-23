/* Importing modules */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
/* Init express object */
var app = express();

/* Set 'view engine' and 'views' variables */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configure middleware static */
app.use(express.static('./app/public'));

/* Configure middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/* COnfigure middleware express-validator */
app.use(expressValidator.check());

/* Configure consign - autoload */
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

/* Export app object */
module.exports = app;
