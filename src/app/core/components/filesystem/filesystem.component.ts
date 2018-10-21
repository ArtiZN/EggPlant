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

  ngOnInit() {
  }

  excelDataChange($event) {
    console.log("-------------------------------");
    console.log($event);
    this.trArray = $event;
  }

  excelHeadersChange($event) {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^");
    console.log($event);
    this.thArray = $event;
  }
}
