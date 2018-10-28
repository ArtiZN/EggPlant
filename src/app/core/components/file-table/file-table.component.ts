import { _prepareForPOST } from './../../utils/filesystem.utils';
import { MongoService } from './../../services/mongo.service';
import { getFilterArray } from './../../utils/filter.utils';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {

  // TODO: find better approach
  isStickyPos: boolean = true;

  constructor(private mongoDataSource: MongoService) { }

  @Input('excelData')
  trArray: any = [];

  @Input('headerData')
  thArray: any = [];

  @Input('filterData')
  filterData: any = {};

  ngOnInit() {

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

  onApplyClick($event) {
    let jsonData = getFilterArray(this.filterData);
    
    console.log(this.thArray);
    console.log(this.trArray);
    console.log(_prepareForPOST(this.thArray, this.trArray));
  }

  closeWindow($event, i) {
    this.thArray[i].opened = !$event;
    if($event) {
      this.isStickyPos = true;
    }
  }
}
