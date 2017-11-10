var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var db  = require('../models.server');

var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

WidgetModel.findWidgetById = findWidgetById;
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateWidget = updateWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;


function findWidgetById(id) {
  return WidgetModel.findOne({_id: id});
}

function createWidget(pageId, widget) {
  widget._page = pageId;
  return WidgetModel.create(widget);
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({_page: pageId});
}

function deleteWidget(id) {
  return WidgetModel.remove({_id: id});
}

function updateWidget(id, widget) {
  return WidgetModel.update({_id: id}, widget);
}

function reorderWidget(pageId, start, end) {
  return WidgetModel.update({_page: pageId, position: start}, {position: end});
}
