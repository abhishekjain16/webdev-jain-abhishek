var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var db  = require('../models.server');

var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.findPageById = findPageById;
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.deletePage = deletePage;
PageModel.updatePage = updatePage;

module.exports = PageModel;


function findPageById(id) {
  return PageModel.findOne({_id: id});
}

function createPage(websiteId, page) {
  return PageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({websiteId: websiteId});
}

function deletePage(id) {
  return PageModel.remove({_id: id});
}

function updatePage(id, page) {
  return PageModel.update({_id: id}, page);
}
