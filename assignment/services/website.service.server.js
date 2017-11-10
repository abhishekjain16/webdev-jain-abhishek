module.exports = function (app) {
  var WebsiteModel = require('../model/website/website.model.server');

  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.delete('/api/website/:websiteId', deleteWebsite);
  app.put('/api/website/:websiteId', updateWebsite);

  // var WEBSITES = [
  //   { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
  //   { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
  //   { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
  //   { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  // ];


  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    WebsiteModel.findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function createWebsite(req, res) {
    var website = req.body;
    WebsiteModel.createWebsiteForUser(website.developerId, website)
      .then(function (website) {
        res.json(website);
      })
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    WebsiteModel.deleteWebsite(websiteId)
      .then(function (status) {
        res.json(status);
      })
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    WebsiteModel.updateWebsite(websiteId, req.body)
      .then(function (status) {
        res.json(status);
      })
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    WebsiteModel.findWebsiteById(websiteId)
      .then(function (website) {
        res.json(website);
      })
  }
}
