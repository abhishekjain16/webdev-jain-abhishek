import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageEditForm: NgForm;
  userId: string;
  page = {};
  pages = [{}];
  name: string;
  description: string;
  pid: string;
  wid: string;

  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.wid = params['wid'];
          this.pid = params['pid'];
        }
      );
    this.pageService.findPageById(this.pid)
      .subscribe(
        (page: any) => {
          this.name = page.name;
          this.description = page.description;
        }
      );
    this.pageService.findPageByWebsiteId(this.wid)
      .subscribe(
        (pages: any) => {
          this.pages = pages;
        }
      );
  }

  update() {
    this.page['name'] = this.pageEditForm.value.name;
    this.page['description'] = this.pageEditForm.value.description;
    this.pageService.updatePage(this.pid, this.page)
      .subscribe(
        (page: any) => {
          this.router.navigate(['user/' + this.userId, 'website', this.wid, 'page']);
        }
      );
  }

  delete() {
    this.pageService.deletePage(this.pid)
      .subscribe(
        (page: any) => {
          this.router.navigate(['user/' + this.userId, 'website', this.wid, 'page']);
        }
      );
  }

}
