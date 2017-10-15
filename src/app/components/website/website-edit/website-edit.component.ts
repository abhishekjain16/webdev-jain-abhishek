import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') websiteEditForm: NgForm;
  website: any;
  userId: string;
  user: any;
  name: string;
  description: string;
  wid: string;
  websites = [{}];

  constructor(private webService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.wid = params['wid'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.website = this.webService.findWebsiteById(this.wid);
    this.websites = this.webService.findWebsitesByUser(this.userId);
    this.name = this.website.name;
    this.description = this.website.description;
  }

  update() {
    this.website["name"] = this.websiteEditForm.value.name;
    this.website["description"] = this.websiteEditForm.value.description;
    this.webService.updateWebsite(this.wid, this.website);
    this.router.navigate(['user/' + this.userId, 'website']);
  }

  delete() {
    this.webService.deleteWebsite(this.wid);
    this.router.navigate(['user/' + this.userId, 'website']);
  }

}
