import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, Inject } from "@angular/core";


@Component({
  selector: 'app-loading-finished-modal',
  templateUrl: './loading-finished-modal.component.html',
  styleUrls: ['./loading-finished-modal.component.css']
})
export class LoadingFinishedModalComponent {
  public description:string = "Completed";
  public loadedRows;
  public errors;

  constructor(
      private dialogRef: MatDialogRef<LoadingFinishedModalComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.loadedRows = data.loaded;
      this.errors = data.errors;
  }

  public close() {
      this.dialogRef.close();
  }
}
