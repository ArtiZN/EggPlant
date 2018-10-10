import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterContainerService {
  private _filterContainer = [];

  constructor() { }

  get filterContainer() {
    return this._filterContainer;
  }

  push(item) {
    this._filterContainer.push(item);
  }
}
