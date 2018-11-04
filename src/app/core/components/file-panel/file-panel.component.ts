import { MainDialogService } from './../../dialogs/services/main-dialog.service';
import { createFilterArray } from './../../utils/filter.utils';
import { createHeaderArray, createTableArray } from './../../utils/viewDB.utils';
import { databaseConfig } from './../../constants/database.constants';
import { MongoService } from './../../services/mongo.service';
import { _createHeaderArray, _createTableArray, _createFiltersArray, _prepareForValidation, _unshiftValidationArray } from './../../utils/filesystem.utils';
import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-file-panel',
  templateUrl: './file-panel.component.html',
  styleUrls: ['./file-panel.component.css']
})
export class FilePanelComponent implements OnInit {

  constructor(private mongoService: MongoService,
              private dialogsService: MainDialogService,
              private spinner: NgxSpinnerService) { }

  @ViewChild('fileImportInput')
  fileImportInput: ElementRef;

  @Output('changeFileData')
  changeFileData = new EventEmitter<any>();

  @Output('changeHeaderData')
  changeHeaderData = new EventEmitter<any>();

  private openDialogs(excelData, fileName, sheetNames) {
    this.mongoService
      .validateCollection(databaseConfig.databaseName, databaseConfig.temporaryCollectionName, "ProductsCollection", _prepareForValidation(excelData))
      .subscribe((response) => {
        let documentsNumber = response.length;

        this.dialogsService.openLoadFileDialog(fileName, sheetNames)
          .afterClosed()
          .subscribe((data) => {
            // data - name of selected sheet to read

            this.dialogsService.openValidationDialog(documentsNumber)
              .afterClosed()
              .subscribe(() => {
                this.spinner.show();

                let errorsNumber = _unshiftValidationArray(response);
                this.changeHeaderData.emit({ headers: createHeaderArray(response), filters: createFilterArray(response) });
                this.changeFileData.emit(createTableArray(response)); 

                this.dialogsService.openLoadingCompleteDialog(documentsNumber, errorsNumber)
                  .afterClosed()
                  .subscribe(() => {
                    this.fileReset();
                    this.spinner.hide();
                });
              });
          });
      }); 
  }

  ngOnInit() {
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
  }

  fileChangeListener($event) {
    const target: DataTransfer = <DataTransfer>($event.target);

    if (target.files.length !== 1) { 
      throw new Error('Cannot use multiple files');
    }

    const reader: FileReader = new FileReader();
	    reader.onload = (e: any) => {
	    	const bstr: string = e.target.result;
			  const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			  const wsname: string = wb.SheetNames[0];
			  const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        let excelData: any = XLSX.utils.sheet_to_json(ws, {header: 1});
        
        let fileName = target.files[0]["name"];
        let sheetNames = wb.SheetNames;

        this.openDialogs(excelData, fileName, sheetNames);
	    };
      reader.readAsBinaryString(target.files[0]);
  }

  clearFiltersClick() {
    this.mongoService.getDocuments(databaseConfig.databaseName, databaseConfig.temporaryCollectionName)
      .subscribe((response) => {
        this.changeHeaderData.emit({ headers: createHeaderArray(response), filters: createFilterArray(response) });
        this.changeFileData.emit(createTableArray(response));
      });
  }

  removeAllClick() {
    this.changeHeaderData.emit({ headers: [], filters: []});
    this.changeFileData.emit([]);
  }
}
