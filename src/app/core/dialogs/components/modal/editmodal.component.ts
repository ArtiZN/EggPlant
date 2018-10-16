import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css']
})
export class EditModalComponent {
  description: string = "Edit validation error";
  error: string;

  constructor(
      private dialogRef: MatDialogRef<EditModalComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.error = data.error;
  }

  close() {
      this.dialogRef.close();
  }
}

