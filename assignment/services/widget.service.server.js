module.exports = function (app) {
  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  var WidgetModel = require('../model/widget/widget.model.server');

  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/api/widget/:widgetId', updateWidget);
  app.put('/api/page/:pageId/widget', sortWidgets);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  // var WIDGETS = [
  //   { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
  //   { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
  //   { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
  //     'url': 'http://lorempixel.com/400/200/'},
  //   { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
  //   { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
  //   { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
  //     'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
  //   { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  // ];


  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    WidgetModel.findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      })
  }

  function createWidget(req, res) {
    var widget = req.body;
    WidgetModel.createWidget(widget.pageId, widget)
      .then(function (widget) {
        res.json(widget);
      })
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    WidgetModel.deleteWidget(widgetId)
      .then(function (status) {
        res.json(status);
      })
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    WidgetModel.updateWidget(widgetId, widget)
      .then(function (status) {
        return WidgetModel.findAllWidgetsForPage(widgetId.pageId);
      })
      .then(function (widgets){
        res.json(widgets);
        return;
      },function (err) {
        res.sendStatus(404).send(err);
        return;
      });
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    WidgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      })
  }

  function sortWidgets(req, res) {
    var initial = req.query['initial'];
    var final = req.query['final'];
    var pageId = req.params['pageId'];
    WidgetModel
      .reorderWidgets(pageId, initial, final)
      .then(function (stats) {
        res.send(200);

      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;
    var newWidget = {
      url: '/assets/uploads/'+filename,
      width: width
    }

    WidgetModel.updateWidget(widgetId, newWidget)
      .then(function (status) {
        res.json(status);
      });


    // var callbackUrl   =  "http://localhost:4200/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" ;
    var callbackUrl   =  "https://jain-abhishek-webdev.herokuapp.com//user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget" ;

    res.redirect(callbackUrl);
  }
}
