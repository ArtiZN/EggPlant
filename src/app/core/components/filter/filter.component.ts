import { FilterContainerService } from './../../services/filter-container.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  isSelectAll: boolean = false;
  searchFilters: string = "";

  constructor(private container: FilterContainerService) { }

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

  onselectOne(i, checkbox){
    console.log("----------------------");
    // console.log(i);
    //console.log(checkbox);
    let obj = {
      name: this.checkboxData.name,
      item: this.checkboxData.values[i]
    };

    if(checkbox.checked) {
      this.container.push(obj);
    }
    else {
      this.container.remove(obj);
    }
    console.log(this.container.getAll());
  }

  onApplyClick() {
    // let selected = this.checkboxData.values.filter((element) => {
    //   return element.checked;
    // });

    // this.applyFilters.emit({
    //   name: this.checkboxData.name,
    //   items: selected 
    // });
    //console.log(this.container.getAll());
  }
}