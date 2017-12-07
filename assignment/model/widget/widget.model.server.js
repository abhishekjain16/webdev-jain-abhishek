var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var db  = require('../models.server');

var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

WidgetModel.findWidgetById = findWidgetById;
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateWidget = updateWidget;
WidgetModel.reorderWidgets = reorderWidgets;
WidgetModel.findLastPositionedWidget = findLastPositionedWidget;

module.exports = WidgetModel;


function findLastPositionedWidget(pageId) {
  return WidgetModel.findOne({_page: pageId}, {sort: {position: -1}});
}

function findWidgetById(id) {
  return WidgetModel.findOne({_id: id});
}

function createWidget(pageId, widget) {
  widget._page = pageId;
  return WidgetModel.create(widget);
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({_page: pageId}).sort({position: 1});
}

function deleteWidget(id) {
  return WidgetModel.remove({_id: id});
}

function updateWidget(id, widget) {
  return WidgetModel.update({_id: id}, widget);
}

function reorderWidgets(pageId, startIndex, endIndex) {
  return WidgetModel.find({_page:pageId}, function (err, widgets) {
    widgets.forEach (function (widget) {
      if (widget.position == startIndex) {
        widget.position = endIndex;
        widget.save();
      } else if (endIndex > startIndex) {
        if (widget.position >= startIndex && widget.position <= endIndex) {
          widget.position = widget.position - 1;
          widget.save();
        }
      } else if (startIndex > endIndex) {
        if (widget.position >= endIndex && widget.position <= startIndex) {
          widget.position = widget.position + 1;
          widget.save();
        }
      }
      // if(startIndex < endIndex){
      //   if(widget.position === startIndex){
      //     widget.position = endIndex;
      //     widget.save();
      //   } else if (widget.position > startIndex
      //     && widget.position <= endIndex){
      //     widget.position --;
      //     widget.save();
      //   }
      // }
      // else {
      //   console.log(widget.position);
      //   console.log(startIndex);
      //   if(widget.position === startIndex){
      //     widget.position = endIndex;
      //     widget.save();
      //   } else if(widget.position < startIndex
      //     && widget.position >= endIndex){
      //     widget.position ++;
      //     widget.save();
      //   }
      // }
    })
  })
}
