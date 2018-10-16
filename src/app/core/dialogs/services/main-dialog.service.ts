import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { EditModalComponent } from "../components/modal/editmodal.component";

@Injectable({
  providedIn: 'root'
})
export class MainDialogService {

  constructor(private dialog: MatDialog) { }

  openEditDialog(error) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = {
        error
    };

    this.dialog.open(EditModalComponent, dialogConfig);
  }
}
