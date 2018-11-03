import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-load-filemodal',
  templateUrl: './load-filemodal.component.html',
  styleUrls: ['./load-filemodal.component.css']
})
export class LoadFilemodalComponent {
  description: string = "Import options";
  filename: string;
  sheetNumber: number;
  sheetNames: string[];

  constructor(
      private dialogRef: MatDialogRef<LoadFilemodalComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.filename = data.filename;
      this.sheetNames = data.sheetNames;
      this.sheetNumber = data.sheetNumber;
  }

  close() {
      this.dialogRef.close();
  }
}
