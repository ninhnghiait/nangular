import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-hello',
  template: `
		Input from parent: {{ parentInput }} <br>
		Change Input: <input [(ngModel)]="parentInput" (change)="eventChangeInput($event)" > <br>
		Service <input (change)="changeService($event)">
  `,
  // style: ['./hello.component.sass']
})
export class HelloComponent implements OnInit {

  dataService: string;
  @Input('parent-input') parentInput : string;
  @Output('changeInput') change = new  EventEmitter<string>();


  constructor(private _dataService: DataService) { }

  ngOnInit() {
  //	this._dataService.setTextFromHello( 'hhhhhhhhhhh');
  }

  eventChangeInput(event) {
  	this.change.emit(event.target.value);
  } 

  changeService(event) {
  	this._dataService.setTextFromHello( event.target.value);
  }

}
