require("@babel/register");

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv').config().parsed;

const app = express();

// Log requests to the console.
app.use(logger('dev'));


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'));

// Grab routes from ./server/routes
require('./routes')(app);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`));
