import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-hi',
  template: `Value From Service: {{ data }}`,
  styleUrls: ['./hi.component.sass']
})
export class HiComponent implements OnInit {
  data: string;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this.data = this._dataService.textFromHello$.subscribe(text => this.data = text);
  }

}
