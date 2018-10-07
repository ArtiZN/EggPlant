import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dropdownState: boolean[] = [];

  columnDefs = [
      {headerName: 'Make', field: 'make', checkboxSelection: true  , filter: "agTextColumnFilter"},
      {headerName: 'Model', field: 'model', filter: "agNumberColumnFilter" },
      {headerName: 'Price', field: 'price'}
  ];

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1').subscribe(data => {
      this.rowData = data;
      console.log(data);
    });
    this.dropdownState = new Array<boolean>(3).fill(false);
  }

  toggle($event, i) {
    this.dropdownState[i] = $event;
  }
}
