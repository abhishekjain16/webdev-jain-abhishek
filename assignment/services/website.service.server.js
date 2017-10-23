module.exports = function (app) {
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.delete('/api/website/:websiteId', deleteWebsite);
  app.put('/api/website/:websiteId', updateWebsite);

  var WEBSITES = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];


  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var websites = findWebsiteByUser(userId);
    res.json(websites);
  }

  function createWebsite(req, res) {
    var website = req.body;
    WEBSITES.push(website);
    res.json(website);
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    WEBSITES = WEBSITES.filter(function (website) {
      return website._id != websiteId;
    });
    res.json(WEBSITES);
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var index = WEBSITES.findIndex(function (website) {
      return website._id === websiteId;
    })
    var website =  Object.assign({}, WEBSITES[index], req.body);
    WEBSITES[index] = website;
    res.json(WEBSITES);
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    var website = findWebsite(websiteId);
    res.json(website);
  }

  function findWebsite(websiteId) {
    return WEBSITES.find(function (website) {
      return website._id === websiteId;
    });
  }

  function findWebsiteByUser(userId) {
    return WEBSITES.filter(function (website) {
      return website.developerId === userId;
    });
  }
}
