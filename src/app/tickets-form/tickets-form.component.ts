import {Component, OnInit} from '@angular/core';
import {Ticket} from "../models/ticket";

@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.css']
})
export class TicketsFormComponent implements OnInit {

  display='none';

  ticket = new Ticket();

  onSubmit() {
    console.log("Title: " + this.ticket.title + ", Body: " + this.ticket.body);
    this.display="block"
  }

  ngOnInit() {
  }

}
