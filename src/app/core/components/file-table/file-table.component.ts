import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {

  // TODO: find better approach
  isStickyPos: boolean = true;

  constructor() { }

  @Input('excelData')
  trArray: any = [];

  @Input('headerData')
  thArray: any = [];

  @Input('filterData')
  filterData: any = {};

  ngOnInit() {

  }

  toggle($event, i) {
    if($event) {
      this.thArray.forEach(element => {
          element.opened = false;
      });
      this.isStickyPos = false;
    }
    this.thArray[i].opened = !this.thArray[i].opened;
  }

  onApplyClick($event) {
    console.log("Apply excel clicked");
  }

  closeWindow($event, i) {
    this.thArray[i].opened = !$event;
    if($event) {
      this.isStickyPos = true;
    }
  }
}
