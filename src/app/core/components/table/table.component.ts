import { createTableArray } from './../../utils/viewDB.utils';
import { databaseConfig } from './../../constants/database.constants';
import { MongoService } from './../../services/mongo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // TODO: find approach of applying 'top' and 'left' properties to dropdown
  dropdownState: boolean[] = [];

  columnDefs = [
      {headerName: 'Make', field: 'make', checkboxSelection: true  , filter: "agTextColumnFilter"},
      {headerName: 'Model', field: 'model', filter: "agNumberColumnFilter" },
      {headerName: 'Price', field: 'price'}
  ];

  rowData: any;

  constructor(private http: HttpClient, private mongoDataSource: MongoService) { }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1').subscribe(data => {
      this.rowData = data;
    });
    this.dropdownState = new Array<boolean>(3).fill(false);

    this.mongoDataSource.getDocuments(databaseConfig.databaseName, databaseConfig.mainCollectionName)
      .subscribe((response) => {
        console.log(response);
        console.log(createTableArray(response));
        console.log(createTableArray([response[0]]));
      });
  }

  // TODO: update directive to click outside
  toggle($event, i) {
    this.dropdownState[i] = $event;
  }
}
