import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() {
  }

  websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];


  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsiteById' : this.findWebsiteById,
    'findWebsiteByUser' : this.findWebsiteByUser,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite,
    'findWebsiteIndexById' : this.findWebsiteIndexById
  };

  createWebsite(userID: string, website: any) {
    website._id = Math.random();
    website.developerId = userID;
    this.websites.push(website);
    return website;
  }

  findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {  return this.websites[x]; }
    }
  }

  findWebsiteIndexById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {  return x; }
    }
  }

  findWebsiteByUser(userId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {  return this.websites[x]; }
    }
  }

  updateWebsite(websiteId, website) {
    const index = this.findWebsiteIndexById(websiteId);
    this.websites[index] = website;
  }

  deleteWebsite(websiteId) {
    const index = this.findWebsiteIndexById(websiteId);
    this.websites.splice(index, 1);
  }

}
