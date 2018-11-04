import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, Inject } from "@angular/core";

@Component({
  selector: 'app-validationstarted-modal',
  templateUrl: './validationstarted-modal.component.html',
  styleUrls: ['./validationstarted-modal.component.css']
})
export class ValidationStartedModalComponent {
  public description:string = "Loading finished";
  public rowsLoaded: number = 0;
  public fileName;

  constructor(
      private dialogRef: MatDialogRef<ValidationStartedModalComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.rowsLoaded = data.rowsLoaded;
  }

  public close() {
      this.dialogRef.close();
  }
}
