require("@babel/register");

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv').config().parsed;
const configurePassport = require('./config/passport')
const db = require('./models');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// var session = require('cookie-session')

const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Configure Passport
configurePassport.default(db);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({cookieName: 'session', secret: 'mysecret', httpOnly: false, secure: false, duration: 30*60*1000, activeDuration: 15*60*1000}))
app.use(cookieParser('mysecret'));
app.use(passport.initialize());
app.use(passport.session());

// Build from the dist directory
app.use(express.static('dist'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Set-Cookie");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Grab routes from ./server/routes
require('./routes')(app);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`));
