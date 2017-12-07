import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';


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
  errorFlag: boolean;

  constructor(private sharedService: SharedService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe(
    //     (params: any) => {
    //       this.userId = params['userId'];
    //     }
    //   );
      this.user = this.sharedService.user;
      if (this.user) {
        this.errorFlag = false;
        this.username = this.user['username'];
        this.last_name = this.user['lastName'];
        this.first_name = this.user['firstName'];
        this.email = this.user['email'];
        this.userId = this.user['_id'];
      } else {
        this.errorFlag = true;
      }
      // this.userService.findUserById(this.userId)
      //   .subscribe(
      //     (user: any) => {
      //       this.errorFlag = false;
      //       this.username = user['username'];
      //       this.last_name = user['lastName'];
      //       this.first_name = user['firstName'];
      //       this.email = user['email'];
      //     },
      //     (error: any) => {
      //       this.errorFlag = true;
      //     }
      //   );

  }

  update() {
    this.user["username"] = this.profileForm.value.username;
    this.user["email"] = this.profileForm.value.email;
    this.user["firstName"] = this.profileForm.value.first_name;
    this.user["lastName"] = this.profileForm.value.last_name;
    this.userService.updateUser(this.userId, this.user)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.username = user['username'];
          this.last_name = user['lastName'];
          this.first_name = user['firstName'];
          this.email = user['email'];
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
}
