import { mongoCollections } from './../../constants/collection.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collections: string[];

  constructor() { }

  ngOnInit() {
    this.collections = mongoCollections;
  }
}
