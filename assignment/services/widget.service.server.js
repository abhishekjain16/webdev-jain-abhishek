module.exports = function (app) {
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/api/widget/:widgetId', updateWidget);

  var WIDGETS = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];


  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var widgets = WIDGETS.filter(function (widget) {
      return widget.pageId === pageId;
    });
    res.json(widgets);
  }

  function createWidget(req, res) {
    var widget = req.body;
    WIDGETS.push(widget);
    res.json(widget);
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    WIDGETS = WIDGETS.filter(function (widget) {
      return widget._id != widgetId;
    });
    res.json(WIDGETS);
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var index = WIDGETS.findIndex(function (widget) {
      return widget._id === widgetId;
    })
    var widget =  Object.assign({}, WIDGETS[index], req.body);
    WIDGETS[index] = widget;
    res.json(WIDGETS);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = WIDGETS.find(function (widget) {
      return widget._id === widgetId;
    });
    res.json(widget);
  }
}
