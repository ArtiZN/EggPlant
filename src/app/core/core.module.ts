import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AgGridModule } from 'ag-grid-angular';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DatabaseComponent } from './components/database/database.component';
import { FilesystemComponent } from './components/filesystem/filesystem.component';
import { TableComponent } from './components/table/table.component';
import { BottomPanelComponent } from './components/bottom-panel/bottom-panel.component';

@NgModule({
    imports: [
        BrowserModule,
        MatTabsModule,
        AgGridModule.withComponents([])
    ],
    declarations: [
        HeaderComponent,
        HomeComponent,
        DatabaseComponent,
        FilesystemComponent,
        TableComponent,
        BottomPanelComponent
    ],
    exports: [

    ],
    providers: []
})
export class CoreModule { }