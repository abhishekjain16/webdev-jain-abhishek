import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsiteById' : this.findWebsiteById,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userID: string, website: any) {
    website._id = Math.floor(Math.random() * 10000).toString();
    website.developerId = userID;
    return this.http.post(this.baseUrl + '/api/user/' + userID + '/website', website)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWebsiteById(websiteId: string) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWebsitesByUser(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateWebsite(websiteId: string, website: any) {
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, website)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteWebsite(websiteId: string) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

}
