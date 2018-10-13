import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit, OnChanges {

  constructor() { }

  @Input('records')
  records: number;

  @Input('shown')
  shown: number;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
