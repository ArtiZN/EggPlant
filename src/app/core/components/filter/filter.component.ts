import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  isSelectAll: boolean = false;
  searchFilters: string = "";

  constructor() { }

  // TODO: apply interfaces to these properties
  @Input('checkboxData')
  checkboxData: any;

  @Output('applyFilters')
  applyFilters = new EventEmitter();

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
  }

  onApplyClick() {
    let selected = this.checkboxData.values.filter((element) => {
      return element.checked;
    });

    this.applyFilters.emit({
      name: this.checkboxData.name,
      items: selected 
    });
  }
}