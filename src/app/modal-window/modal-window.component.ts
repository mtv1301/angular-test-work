import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent{
  @Input() display: string;

  constructor() {
    this.display='none';
  }

  onCloseHandled(){
    this.display='none';
  }

}
