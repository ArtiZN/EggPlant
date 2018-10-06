import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true  },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];
  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    console.log(this.rowData);
  }

}
