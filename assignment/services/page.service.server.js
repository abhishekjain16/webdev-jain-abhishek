module.exports = function (app) {
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/page/:pageId', findPageById);
  app.delete('/api/page/:pageId', deletePage);
  app.put('/api/page/:pageId', updatePage);

  var PAGES = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var pages = PAGES.filter(function (page) {
      return page.websiteId === websiteId;
    });
    res.json(pages);
  }

  function createPage(req, res) {
    var page = req.body;
    PAGES.push(page);
    res.json(page);
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    PAGES = PAGES.filter(function (page) {
      return page._id != pageId;
    });
    res.json(PAGES);
  }

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var index = PAGES.findIndex(function (page) {
      return page._id === pageId;
    })
    var page =  Object.assign({}, PAGES[index], req.body);
    PAGES[index] = page;
    res.json(PAGES);
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    var page = PAGES.find(function (page) {
      return page._id === pageId;
    });
    res.json(page);
  }
}
