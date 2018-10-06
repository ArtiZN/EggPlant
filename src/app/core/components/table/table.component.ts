import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true  },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];
  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    console.log(`Selected nodes: ${selectedDataStringPresentation}`);
    console.log(this.agGrid);
  }
}
