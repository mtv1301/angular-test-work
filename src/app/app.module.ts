import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap";
import { UserListComponent } from './user-list/user-list.component';

import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UserService} from "./user.service";
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TicketsFormComponent } from './tickets-form/tickets-form.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    UserDetailComponent,
    TicketsComponent,
    HomePageComponent,
    UserEditComponent,
    TicketsFormComponent,
    ModalWindowComponent

  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [UserService, MessageService,
    /* . . . */],
  bootstrap: [AppComponent]
})
export class AppModule { }
