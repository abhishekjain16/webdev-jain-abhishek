import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  api = {
    'createPage'   : this.createPage,
    'findPageById' : this.findPageById,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId: string, page: any) {
    page.websiteId = websiteId;
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageById(pageId: string) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findPageByWebsiteId(websiteId: string) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updatePage(pageId: string, page: any) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId, page)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deletePage(pageId: string) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

}
