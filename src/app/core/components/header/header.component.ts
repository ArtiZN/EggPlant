import { mongoCollections } from './../../constants/collection.constants';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  collections: string[];

  constructor(private focusMonitor: FocusMonitor) { }

  ngOnInit() {
    this.collections = mongoCollections;
  }


    ngAfterViewInit() {
      this.focusMonitor.stopMonitoring(document.getElementById('collectionMenu'));
    }
}
