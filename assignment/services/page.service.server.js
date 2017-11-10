module.exports = function (app) {

  var PageModel = require('../model/page/page.model.server');

  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/page/:pageId', findPageById);
  app.delete('/api/page/:pageId', deletePage);
  app.put('/api/page/:pageId', updatePage);

  // var PAGES = [
  //   { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
  //   { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
  //   { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  // ];

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    PageModel.findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      })
  }

  function createPage(req, res) {
    var page = req.body;
    PageModel.createPage(page.websiteId, page)
      .then(function (page) {
        res.json(page);
      });
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    PageModel.deletePage(pageId)
      .then(function (status) {
        res.json(status);
      });
  }

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    PageModel.updatePage(pageId, req.body)
      .then(function (status) {
        res.json(status);
      });
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    PageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
      });
  }
}
