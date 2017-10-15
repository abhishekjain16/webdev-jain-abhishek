import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() {
  }

  widgets = [
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



  api = {
    'createWidget'   : this.createWidget,
    'findWidgetById' : this.findWidgetById,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget,
    'findWidgetIndexById' : this.findWidgetIndexById
  };

  createWidget(pageId: string, widget: any) {
    widget._id = Math.floor(Math.random() * 10000).toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {  return this.widgets[x]; }
    }
  }

  findWidgetIndexById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {  return x; }
    }
  }

  findWidgetsByPageId(pageId: string) {
    const results = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {  results.push(this.widgets[x]); }
    }
    return results;
  }

  updateWidget(widgetId: string, widget: any) {
    const index = this.findWidgetIndexById(widgetId);
    this.widgets[index] = widget;
  }

  deleteWidget(widgetId: string) {
    const index = this.
    findWidgetIndexById(widgetId);
    this.widgets.splice(index, 1);
  }

}
