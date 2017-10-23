import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  userId : string;
  websites = [{}];
  user: any;
  username: string;

  constructor(private webService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.userService.findUserById(this.userId)
      .subscribe(
        (user: any) => {
          this.username = user.username;
        }
      );
    this.webService.findWebsitesByUser(this.userId)
      .subscribe(
        (websites: any) => {
          this.websites = websites;
        }
      );
  }

}
