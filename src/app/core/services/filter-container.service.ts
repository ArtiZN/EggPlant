import { Injectable } from '@angular/core';

import { remove } from "../utils/filter.utils";

@Injectable({
  providedIn: 'root'
})
export class FilterContainerService {
  private _filterContainer = [];

  constructor() { }

  getAll() {
    return this._filterContainer;
  }

  // TODO: apply interfaces
  push(item) {
    this._filterContainer.push(item);
  }

  clear() {
    this._filterContainer = [];
  }

  remove(item) {
    this._filterContainer = remove(this._filterContainer, item);
  }
}
