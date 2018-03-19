import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  blockUser(userItem) {
    userItem.isBlocked = true
  }
  unBlockUser(userItem) {
    userItem.isBlocked = false
  }
}

