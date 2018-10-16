import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit, OnChanges {
  allowChanging: boolean = false;

  constructor() { }

  @Input('records')
  records: number;

  @Input('shown')
  shown: number;

  @Output('getData')
  getData = new EventEmitter();

  @Output('clearFilters')
  clearFilters = new EventEmitter();

  @Output('toExcel')
  toExcel = new EventEmitter();

  @Output('onAllowChanging')
  onAllowChanging = new EventEmitter<boolean>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onGetData() {
    this.getData.emit(null);
  }

  onClearFilters() {
    this.clearFilters.emit(null);
  }

  onToExcel() {
    this.toExcel.emit(null);
  }

  // TODO: fix this
  onAllowChange() {
    this.allowChanging = !this.allowChanging;
    this.onAllowChanging.emit(this.allowChanging);
  }
}
