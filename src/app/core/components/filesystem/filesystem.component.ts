import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.css']
})
export class FilesystemComponent implements OnInit {

  constructor() { }

  trArray: any = [];
  thArray: any = [];
  filterArray: any = {};

  ngOnInit() {
  }

  excelDataChange($event) {
    this.trArray = $event;
  }

  excelHeadersChange($event) {
    this.thArray = $event.headers;
    this.filterArray = $event.filters;
  }
}
