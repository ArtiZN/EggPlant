import { Injectable } from '@angular/core';

import { remove, removeAll, addAll } from "../utils/filter.utils";

@Injectable({
  providedIn: 'root'
})
export class FilterContainerService {
  private _filterContainer = [];

  constructor() { }

  // getAll() {
  //   return this._filterContainer;
  // }

  // // TODO: apply interfaces
  // push(item) {
  //   this._filterContainer.push(item);
  // }

  // pushAll(array) {
  //   this._filterContainer = addAll(this._filterContainer, array);
  // }

  // clear() {
  //   this._filterContainer = [];
  // }

  // remove(item) {
  //   this._filterContainer = remove(this._filterContainer, item);
  // }

  // removeAll(array) {
  //   this._filterContainer = removeAll(this._filterContainer, array);
  // }
}
