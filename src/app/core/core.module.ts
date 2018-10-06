import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [

    ],
    providers: []
})
export class CoreModule { }