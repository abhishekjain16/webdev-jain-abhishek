import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId : string;
  pages = [{}];
  user: any;
  wid: string;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.wid = params['wid'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.pages = this.pageService.findPageByWebsiteId(this.wid);
  }

}
