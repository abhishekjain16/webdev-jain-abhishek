module.exports = function (app) {

  var UserModel = require('../model/user/user.model.server');

  app.get('/api/user', findUsers);
  app.get('/api/user/:userId', findUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);
  app.put('/api/user/:userId', updateUser);

  // var users = [{_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice.com'},
  //   {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com'},
  //   {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@gmail.com'},
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jose@gmail.com'}
  // ];

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
    UserModel.createUser(user)
      .then(function (user) {
        res.json(user);
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
}
