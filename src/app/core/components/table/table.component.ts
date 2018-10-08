import { createHeaderArray, createTableArray } from './../../utils/viewDB.utils';
import { databaseConfig } from './../../constants/database.constants';
import { MongoService } from './../../services/mongo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { getUnique } from '../../utils/filter.utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // TODO: find approach of applying 'top' and 'left' properties to dropdown
  dropdownState: boolean[] = [];

  thArray: any;
  trArray: any;

  constructor(private http: HttpClient, private mongoDataSource: MongoService) { }

  ngOnInit() {
    this.mongoDataSource.getDocuments(databaseConfig.databaseName, databaseConfig.mainCollectionName)
      .subscribe((response) => {
        this.thArray = (createHeaderArray(response));
        this.trArray = (createTableArray(response));
        console.log(this.thArray);
      });
  }

  // TODO: update directive to click outside
  toggle($event, i) {
    this.dropdownState[i] = $event;
  }
}
