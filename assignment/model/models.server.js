var mongoose = require('mongoose');
var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds135514.mlab.com:35514/heroku_ttms5q2v'; // use yours
}


var db = mongoose.connect(connectionString, {
  useMongoClient: true
});

module.exports = db;
