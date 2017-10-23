import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'findUserByCredentials' : this.findUserByCredentials
  };

  createUser(user: any) {
    user._id = Math.floor(Math.random() * 10000).toString();
    return this.http.post(this.baseUrl + '/api/user/', user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateUser(userId: string, user: any) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByCredentials(username: string, password: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

}
