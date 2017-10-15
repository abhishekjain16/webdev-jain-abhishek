import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor() {
  }

  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];


  api = {
    'createPage'   : this.createPage,
    'findPageById' : this.findPageById,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage,
    'findPageIndexById' : this.findPageIndexById
  };

  createPage(websiteId: string, page: any) {
    page._id = Math.floor(Math.random() * 10000).toString();
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }

  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {  return this.pages[x]; }
    }
  }

  findPageIndexById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {  return x; }
    }
  }

  findPageByWebsiteId(websiteId: string) {
    const result = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {  result.push(this.pages[x]); }
    }
    return result;
  }

  updatePage(pageId: string, page: any) {
    const index = this.findPageIndexById(pageId);
    this.pages[index] = page;
  }

  deletePage(pageId: string) {
    const index = this.findPageIndexById(pageId);
    this.pages.splice(index, 1);
  }

}
