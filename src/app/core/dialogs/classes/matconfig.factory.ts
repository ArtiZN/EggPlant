import { MatDialogConfig } from '@angular/material';


export class MatConfigFactory {

    // TODO: apply args in another way
    public static createMatConfig(disableClose: boolean = true, 
                                  autoFocus: boolean = true, 
                                  width: string = "400px", 
                                  data: Object): MatDialogConfig<any> {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = disableClose;
        dialogConfig.autoFocus = autoFocus;
        dialogConfig.width = width;
        dialogConfig.data = data;

        return dialogConfig;
    }
}