import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';


@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;
  userId: string;
  pages = [{}];
  page: any;
  name: string;
  description: string;
  wid: string;
  user: any;


  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
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

  create() {
    this.name = this.pageForm.value.name;
    this.description = this.pageForm.value.description;
    const page = {
      name: this.name,
      description: this.description
    }
    this.page = this.pageService.createPage(this.wid, page);
    this.router.navigate(['user/', this.userId, 'website', this.wid, 'page']);
  }

}
