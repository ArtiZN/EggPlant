import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.css']
})
export class FilesystemComponent implements OnInit {

  constructor() { }

  excelData: any = [];

  ngOnInit() {
  }

  excelDataChange($event) {
    this.excelData = $event;
    console.log("-----------------------------");
    console.log(this.excelData);
  }
}
