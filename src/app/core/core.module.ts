import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';


import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DatabaseComponent } from './components/database/database.component';
import { FilesystemComponent } from './components/filesystem/filesystem.component';
import { TableComponent } from './components/table/table.component';
import { BottomPanelComponent } from './components/bottom-panel/bottom-panel.component';
import { FilterComponent } from './components/filter/filter.component';
import { ScaleFilterDirective } from './directives/scale-filter.directive';

@NgModule({
    imports: [
        BrowserModule,
        MatTabsModule,
        MatInputModule,
        MatCheckboxModule,
        HttpClientModule
    ],
    declarations: [
        HeaderComponent,
        HomeComponent,
        DatabaseComponent,
        FilesystemComponent,
        TableComponent,
        BottomPanelComponent,
        FilterComponent,
        ScaleFilterDirective
    ],
    exports: [

    ],
    providers: []
})
export class CoreModule { }