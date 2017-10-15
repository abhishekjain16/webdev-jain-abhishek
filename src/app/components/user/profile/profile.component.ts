import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  userId: string;
  user = {};
  username: string;
  last_name: string;
  first_name: string;
  email: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
    this.last_name = this.user['lastName'];
    this.first_name = this.user['firstName'];
    this.email = this.user['email'];
  }

  update() {
    this.user["username"] = this.profileForm.value.username;
    this.user["email"] = this.profileForm.value.email;
    this.user["firstName"] = this.profileForm.value.first_name;
    this.user["lastName"] = this.profileForm.value.last_name;
    this.userService.updateUser(this.userId, this.user);
  }
}
