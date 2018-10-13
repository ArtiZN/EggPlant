import { DatabaseNotifierService } from './../../services/database-notifier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  records: number = 0;
  shown: number = 0;

  constructor(private notifier: DatabaseNotifierService) { }

  ngOnInit() {
  }

  onRecordsChange($event) {
    this.records = $event;
  }

  onShownChange($event) {
    this.shown = $event; 
  }

  onGetDataClick($event) {
    this.notifier.notifyOther({ "getData": true });
  }

  onClearFiltersClick($event) {
    this.notifier.notifyOther({ "clearFilters": true });
  }

  onToExcelClick($event) {
    this.notifier.notifyOther({ "toExcel": true });
  }
}
