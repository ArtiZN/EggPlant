import { MainDialogService } from './../../dialogs/services/main-dialog.service';
import { DatabaseNotifierService } from './../../services/database-notifier.service';
import { createFilterArray, getFilterArray } from './../../utils/filter.utils';
import { createHeaderArray, createTableArray, prepareToExcel } from './../../utils/viewDB.utils';
import { databaseConfig } from './../../constants/database.constants';
import { MongoService } from './../../services/mongo.service';
import { ExcelService } from '../../services/excel.service';

import { Component, OnInit, EventEmitter, Output, Input, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

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

  // TODO: get rid of this variable
  currentInputValue: string;

  // TODO: find better approach
  isStickyPos: boolean = true;

  constructor(private http: HttpClient, 
              private mongoDataSource: MongoService,
              private notifier: DatabaseNotifierService,
              private excelService: ExcelService,
              private spinner: NgxSpinnerService,
              private dialogs: MainDialogService) { }

  @Input('allowChanging')
  isChangingAllowed: boolean;

  @Output('records')
  records = new EventEmitter<number>();

  @Output('shown')
  shown = new EventEmitter<number>();

  private emitRecordsStat(records: number, shown: number): void {
    if(records) {
      this.records.emit(records);
    }
    this.shown.emit(shown);
  }

  // TODO: find approach of applying this code in another service
  private getData(sDatabaseName, sCollectionName): void {
    this.spinner.show();
    this.mongoDataSource.getDocuments(sDatabaseName, sCollectionName)
      .subscribe((response: any) => {
        this.thArray = createHeaderArray(response);
        this.trArray = createTableArray(response);
        this.filtersArray = createFilterArray(response);
        this.emitRecordsStat(response.length, response.length);
        this.spinner.hide();
        console.log(this.trArray);
      });
  }

  private setInputColor(input: HTMLInputElement, color: string) {
    input.style.backgroundColor = color;
    input.parentElement.parentElement.style.backgroundColor = color;
  }

  ngOnInit() {
    // TODO: find better approach
    this.subscription = this.notifier.notifyObservable$.subscribe((response: any) => {
      if((response.hasOwnProperty('getData') && response.getData) ||
         (response.hasOwnProperty('clearFilters') && response.clearFilters)) {
        this.getData(databaseConfig.databaseName, databaseConfig.mainCollectionName);
      }
      else if(response.hasOwnProperty('toExcel') && response.toExcel) {
        this.excelService.exportAsExcelFile(prepareToExcel(this.thArray, this.trArray), 'test.xlsx');
      }
    });
    this.getData(databaseConfig.databaseName, databaseConfig.mainCollectionName);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggle($event, i) {
    if($event) {
      this.thArray.forEach(element => {
        element.opened = false;
      });
      this.isStickyPos = false;
    }
    this.thArray[i].opened = !this.thArray[i].opened;
  }

  closeWindow($event, i) {
    this.thArray[i].opened = !$event;
    if($event) {
      this.isStickyPos = true;
    }
  }

  onApplyClick($event) {
    let jsonData = getFilterArray(this.filtersArray);
    this.spinner.show();
    this.mongoDataSource.getFilteredDocuments(databaseConfig.databaseName, databaseConfig.mainCollectionName, jsonData)
      .subscribe((response: any) => {
        this.thArray = createHeaderArray(response);
        this.trArray = createTableArray(response);
        this.emitRecordsStat(null, response.length);
        this.spinner.hide();
      });
  }

  focusInput(input: HTMLInputElement) {
    this.currentInputValue = input.value;
  }

  focusOutInput(input: HTMLInputElement, _id: string, index: number) {
    if(this.currentInputValue !== input.value)
    {
      let jsonData = {
        "name": this.thArray[index].name,
        "value": input.value
      };
      this.mongoDataSource.updateDocument(_id, databaseConfig.databaseName, databaseConfig.mainCollectionName, "ProductsCollection", jsonData)
        .subscribe((response: any) => {
          if(response[0].name !== "Errors") {
            this.setInputColor(input, "rgb(105, 240, 174)");
          }
          else {
            this.dialogs.openEditDialog(response[0].value);
            this.setInputColor(input, "rgb(255, 64, 129)")
          }
        });
    }
  }

  getRowStatus(row: any) {

  }
}
