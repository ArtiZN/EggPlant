import { DatabaseNotifierService } from './../../services/database-notifier.service';
import { createFilterArray, getFilterArray } from './../../utils/filter.utils';
import { createHeaderArray, createTableArray } from './../../utils/viewDB.utils';
import { databaseConfig } from './../../constants/database.constants';
import { MongoService } from './../../services/mongo.service';

import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  filtersArray: any = {};
  
  thArray: any;
  trArray: any;

  constructor(private http: HttpClient, 
              private mongoDataSource: MongoService,
              private notifier: DatabaseNotifierService) { }

  @Output('records')
  records = new EventEmitter<number>();

  @Output('shown')
  shown = new EventEmitter<number>();

  private emitRecordsStat(records: number, shown: number) {
    if(records) {
      this.records.emit(records);
    }
    this.shown.emit(shown);
  }

  ngOnInit() {
    // TODO: find better approach
    this.subscription = this.notifier.notifyObservable$.subscribe((response: any) => {
      if(response.hasOwnProperty('getData') && response.getData) {
        console.log("--------------------");
        console.log("get");
      }
      else if(response.hasOwnProperty('clearFilters') && response.clearFilters) {
        console.log("--------------------");
        console.log("filters");
      }
      else if(response.hasOwnProperty('toExcel') && response.toExcel) {
        console.log("--------------------");
        console.log("toxcel");
      }
    });

    this.mongoDataSource.getDocuments(databaseConfig.databaseName, databaseConfig.mainCollectionName)
      .subscribe((response: any) => {
        this.thArray = createHeaderArray(response);
        this.trArray = createTableArray(response);
        this.filtersArray = createFilterArray(response);
        this.emitRecordsStat(response.length, response.length);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggle($event, i) {
    if($event) {
      this.thArray.forEach(element => {
        element.opened = false;
      });
    }
    this.thArray[i].opened = !this.thArray[i].opened;
  }

  closeWindow($event, i) {
      this.thArray[i].opened = !$event;
  }

  onApplyClick($event) {
    let jsonData = getFilterArray(this.filtersArray);
    this.mongoDataSource.getFilteredDocuments(databaseConfig.databaseName, databaseConfig.mainCollectionName, jsonData)
      .subscribe((response: any) => {
        this.thArray = createHeaderArray(response);
        this.trArray = createTableArray(response);
        this.emitRecordsStat(null, response.length);
      });
  }
}
