import { remove, addAll, removeAll } from './../../utils/filter.utils';
import { FilterContainerService } from './../../services/filter-container.service';
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  isSelectAll: boolean = false;
  searchFilters: string = "";

  constructor(private container: FilterContainerService, private eRef: ElementRef) { }

  // TODO: apply interfaces to these properties
  @Input('checkboxData')
  checkboxData: any;

  @Input('filterArray')
  filterArray: any[];

  @Output('applyFilters')
  applyFilters = new EventEmitter();

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      console.log("clicked inside");
    } else {
      console.log("clicked outside");
    }
  }


  ngOnInit() {
    
  }

  onselectAll() {
    this.isSelectAll = !this.isSelectAll;
    this.toggleAll();
  }

  toggleAll() {
    this.checkboxData.values.forEach(element => {
      element.checked = this.isSelectAll;
    });
    if(this.isSelectAll) {
      addAll(this.filterArray, this.checkboxData.values);
    }
    else {
      removeAll(this.filterArray);
    }
  }

  onselectOne(i, checkbox){
    if(checkbox.checked) {
      this.filterArray.push(this.checkboxData.values[i].name);
    }
    else {
      remove(this.filterArray, this.checkboxData.values[i].name);
    }
  }

  onApplyClick() {
    this.applyFilters.emit(null);
    removeAll(this.filterArray);
  }
}