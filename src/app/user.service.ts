import { Injectable } from '@angular/core';
import { User } from './models/user';
import {USERS} from './mock-users';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class UserService {

  constructor(private messageService: MessageService) { }


  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    this.messageService.add('UserService: fetched users id=${id}');
    return of(USERS.find(user => user.id === id));
  }

}
