var mongoose = require('mongoose');

var pageSchema = mongoose.Schema({
  websiteId:{type: mongoose.Schema.Types.ObjectId,ref:'WebsiteModel'},
  name: String,
  description: String,
  title: String,
  dateCreated : {type: Date, default:Date.now()},
  widgets:[{type: mongoose.Schema.Types.ObjectId,ref:'WidgetModel'}]
},{collection:'page'});

module.exports = pageSchema;
