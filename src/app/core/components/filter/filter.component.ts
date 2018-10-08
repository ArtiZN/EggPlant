import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  // TODO: apply interfaces to these properties
  @Input('checkboxData')
  checkboxData: any;

  ngOnInit() {
  }
}
