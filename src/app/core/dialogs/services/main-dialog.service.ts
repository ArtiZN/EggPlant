import { LoadingFinishedModalComponent } from './../components/loading-finished-modal/loading-finished-modal.component';
import { ValidationStartedModalComponent } from './../components/validationstarted-modal/validationstarted-modal.component';
import { LoadFileModalComponent } from './../components/load-filemodal/load-filemodal.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

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

  openLoadFileDialog(filename: string, sheetNames: string[]): MatDialogRef<LoadFileModalComponent, any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = {
        filename, 
        sheetNames
    };

    return this.dialog.open(LoadFileModalComponent, dialogConfig);
  }

  openValidationDialog(rowsLoaded: number): MatDialogRef<ValidationStartedModalComponent, any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = {
      rowsLoaded
    };

    return this.dialog.open(ValidationStartedModalComponent, dialogConfig);
  }

  openLoadingCompleteDialog(loaded: number, errors: number): MatDialogRef<LoadingFinishedModalComponent, any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = {
      loaded,
      errors
    };

    return this.dialog.open(LoadingFinishedModalComponent, dialogConfig);
  }
}
