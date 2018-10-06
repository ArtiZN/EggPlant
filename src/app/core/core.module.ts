import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    exports: [

    ],
    providers: []
})
export class CoreModule { }