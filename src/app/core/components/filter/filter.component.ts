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

  @Output('closeWindow')
  closeWindow = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event'])
  clickout(event) {
    // TODO: find better approach
    if(this.eRef.nativeElement.contains(event.target) || event.target.classList.contains('fa-align-justify')) {
      this.closeWindow.emit(false);
    } else {
      this.closeWindow.emit(true);
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