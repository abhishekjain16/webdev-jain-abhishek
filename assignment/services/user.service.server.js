module.exports = function (app) {
  var facebookConfig = {};
  // if (process.env.FACEBOOK_CLIENT_ID) {
  //   facebookConfig = {
  //     clientID     : process.env.FACEBOOK_CLIENT_ID,
  //     clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
  //     callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  //   };
  // } else {
  //   facebookConfig = {
  //     clientID     : '382552615534382',
  //     clientSecret : '0353493dfdbfdc9912a64837b593bc82',
  //     callbackURL  : 'http://localhost:3000/auth/facebook/callback'
  //   };
  // }
  facebookConfig = {
    clientID     : '382552615534382',
    clientSecret : '0353493dfdbfdc9912a64837b593bc82',
    callbackURL  : 'https://jain-abhishek-webdev.herokuapp.com/auth/facebook/callback'
  };

  var UserModel = require('../model/user/user.model.server');
  var passport = require('passport');
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));
  var bcrypt = require("bcrypt-nodejs");
  var FacebookStrategy = require('passport-facebook').Strategy;
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));


  app.get('/api/user', findUsers);
  app.get('/api/user/:userId', findUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);
  app.put('/api/user/:userId', updateUser);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedin', loggedin);
  app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: 'https://jain-abhishek-webdev.herokuapp.com/profile',
      failureRedirect: 'https://jain-abhishek-webdev.herokuapp.com/login'
    }));
  // app.get('/auth/facebook', )

  // var users = [{_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice.com'},
  //   {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com'},
  //   {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@gmail.com'},
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jose@gmail.com'}
  // ];

  function facebookStrategy(token, refreshToken, profile, done) {
    UserModel
      .findUserByFacebookId(profile.id)
        .then(function (user) {
          if (user) {
            return done(null, user);
          } else {
            const user = {
              firstName: profile.name['givenName'],
              lastName: profile.name['familyName'],
              username: profile.username,
              facebook: {
                id: profile.id,
                token: token
              }
            }
            UserModel.createUser(user)
              .then(function (user) {
                return done(null, user);
              })
          }
        })
  }



  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if (username && password) {
      UserModel.findUserByCredentials(username, password)
        .then(function (user) {
          if (user) {
            res.json(user);
          } else {
            res.status(400).send({message: "User not found"});
          }
          res.json(user);
        })
    } else if (username) {
      UserModel.findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        })
    } else {
      UserModel.findAllUsers()
        .then(
          function(users) {
            res.json(users);
          },
          function(err) {
            res.status(400).send(err);
          }
        );
    }
  }

  function createUser(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    UserModel.createUser(user)
      .then(function (user) {
        if (user) {
          req.login(user, function(err) {
            if(err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        } else {
          res.status(400).send(err);
        }
      })
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    UserModel.deleteUser(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    UserModel.updateUser(userId, user)
      .then(function (user) {
        return UserModel.findUserById(userId);
      })
      .then(function (user){
        res.json(user);
        return;
      },function (err) {
        res.sendStatus(404).send(err);
        return;
      });
  }


  function findUser(req, res) {
    var userId = req.params['userId'];
    UserModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      })
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    UserModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    UserModel
      .findUserByUsername(username)
      .then(
        function(user) {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

}
