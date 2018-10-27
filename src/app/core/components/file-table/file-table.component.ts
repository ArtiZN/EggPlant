import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {

  filtersArray: any = {};

  constructor() { }

  @Input('excelData')
  trArray: any = [];

  @Input('headerData')
  thArray: any = [];

  @Input('filterData')
  filterData: any = {};

  ngOnInit() {

  }

  onApplyClick($event) {
    console.log("Apply excel clicked");
  }

  closeWindow($event, i) {
    console.log("Close window excel");
  }
}
