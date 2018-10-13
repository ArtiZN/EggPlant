import { ExcelService } from './services/excel.service';
import { DatabaseNotifierService } from './services/database-notifier.service';
import { restApiConfig } from './constants/rest.constants';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DatabaseComponent } from './components/database/database.component';
import { FilesystemComponent } from './components/filesystem/filesystem.component';
import { TableComponent } from './components/table/table.component';
import { BottomPanelComponent } from './components/bottom-panel/bottom-panel.component';
import { FilterComponent } from './components/filter/filter.component';
import { ScaleFilterDirective } from './directives/scale-filter.directive';
import { MongoService, MONGO_URL } from './services/mongo.service';
import { FormsModule } from '@angular/forms';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { FilterContainerService } from './services/filter-container.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MatTabsModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
    declarations: [
        HeaderComponent,
        HomeComponent,
        DatabaseComponent,
        FilesystemComponent,
        TableComponent,
        BottomPanelComponent,
        FilterComponent,
        ScaleFilterDirective,
        FilterSearchPipe,
        SpinnerComponent
    ],
    exports: [

    ],
    providers: [
        MongoService,
        {
			provide: MONGO_URL, 
			useValue: `${restApiConfig.protocol}://${restApiConfig.host}:${restApiConfig.port}/${restApiConfig.api}`			
        },
        FilterContainerService,
        DatabaseNotifierService,
        ExcelService
    ]
})
export class CoreModule { }