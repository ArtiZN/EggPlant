import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  isSelectAll: boolean = false;
  selectState: boolean[];

  constructor() { }

  // TODO: apply interfaces to these properties
  @Input('checkboxData')
  checkboxData: any;

  ngOnInit() {
    this.selectState = new Array<boolean>(this.checkboxData.values.length).fill(false);
  }

  onselectAll() {
    this.isSelectAll = !this.isSelectAll;
    this.toggleAll();
    console.log("select All clicked");
    console.log(this.isSelectAll);
    console.log(this.selectState);
  }

  toggleAll() {
    for(let i = 0; i < this.selectState.length; i++) {
      this.selectState[i] = this.isSelectAll;
    };
  }
}