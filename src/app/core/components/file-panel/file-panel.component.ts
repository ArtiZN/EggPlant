import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-file-panel',
  templateUrl: './file-panel.component.html',
  styleUrls: ['./file-panel.component.css']
})
export class FilePanelComponent implements OnInit {

  constructor() { }

  @ViewChild('fileImportInput')
  fileImportInput: ElementRef;

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
 			  console.log(excelData);

        // this.currentFileName = target.files[0]["name"];
        this.fileReset();
	    };
	    reader.readAsBinaryString(target.files[0]);
  }
}
