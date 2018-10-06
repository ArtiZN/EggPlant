import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DatabaseComponent } from './components/database/database.component';
import { FilesystemComponent } from './components/filesystem/filesystem.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
    imports: [
        BrowserModule,
        MatTabsModule
    ],
    declarations: [
        HeaderComponent,
        HomeComponent,
        DatabaseComponent,
        FilesystemComponent,
        TableComponent
    ],
    exports: [

    ],
    providers: []
})
export class CoreModule { }