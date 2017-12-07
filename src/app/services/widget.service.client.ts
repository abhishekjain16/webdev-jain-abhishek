import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) {
  }
  baseUrl = environment.baseUrl;

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetById' : this.findWidgetById,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  createWidget(pageId: string, widget: any) {
    widget.pageId = pageId;
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetById(widgetId: string) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetsByPageId(pageId: string) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateWidget(widgetId: string, widget: any) {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteWidget(widgetId: string) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  reorderWidgets(startIndex, endIndex, pageId) {

    const url = this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + startIndex + '&final=' + endIndex;
    return this.http.put(url, '')
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );
  }
}
