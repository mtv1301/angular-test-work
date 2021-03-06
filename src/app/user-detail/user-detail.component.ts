import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userInput: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.userInput = user);
  }
  goBack(): void {
    this.location.back();
  }

}
