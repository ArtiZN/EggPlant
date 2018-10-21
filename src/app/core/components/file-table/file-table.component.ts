import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {

  constructor() { }

  @Input('changeExcelData')
  excelData: any = [];

  ngOnInit() {
  }
}
