module.exports = function (app) {
  app.get('/api/user', findUsers);
  app.get('/api/user/:userId', findUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);
  app.put('/api/user/:userId', updateUser);

  var users = [{_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice.com'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@gmail.com'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@gmail.com'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jose@gmail.com'}
  ];

  function findUsers(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if (username && password) {
      var user = findUserByCredentials(username, password);
      if (user) {
        res.json(user);
      } else {
        res.status(400).send({message: "User not found"});
      }
    } else if (username) {
      var user = findUserByUsername(username);
      if (user) {
        res.json(user);
      } else {
        res.status(400).send({message: "User not found"});
      }
    } else {
      res.json(users);
    }
  }

  function createUser(req, res) {
    var user = req.body;
    users.push(user);
    res.json(user);
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    var user = findUserByID(userId);
    users.remove(user);
    res.json(users);
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var index = users.findIndex(function (user) {
      return user._id === userId;
    })
    var user =  Object.assign({}, users[index], req.body);
    users[index] = user;
    res.json(users[index]);
  }


  function findUser(req, res) {
    var userId = req.params['userId'];
    var user = findUserByID(userId);
    res.json(user);
  }

  function findUserByID(userId) {
    return users.find(function (user) {
      return user._id == userId
    });
  }

  function findUserByCredentials(username, password) {
    var user = findUserByUsername(username);
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  }

  function findUserByUsername(username) {
    return users.find(function (user) {
      return user.username === username;
    });
  }

}
