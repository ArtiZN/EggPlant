import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {

  constructor() { }

  @Input('excelData')
  trArray: any = [];

  @Input('headerData')
  thArray: any = [];

  ngOnInit() {
  }
}
