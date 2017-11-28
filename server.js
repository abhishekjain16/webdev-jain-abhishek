/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.FACEBOOK_CLIENT_ID) {
  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };
} else {
  var facebookConfig = {
    clientID     : '382552615534382',
    clientSecret : '0353493dfdbfdc9912a64837b593bc82',
    callbackURL  : 'http://localhost:3000/auth/facebook/callback'
  };
}
var sessionSecret = "";
if (process.env.SESSION_SECRET) {
  sessionSecret = process.env.SESSION_SECRET;
} else {
  sessionSecret = "brjnfkdmolmredsl";
}

passport.use(new FacebookStrategy(facebookConfig, FacebookStrategy));



// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.use(cookieParser());
app.use(expressSession({secret: sessionSecret}));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || '3000';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

var serverSide = require("./server/test-mongodb/app");
serverSide(app);

require("./assignment/app")(app);
app.listen(port);

// // For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//
//
// server.listen( port , () => console.log('Running'));


