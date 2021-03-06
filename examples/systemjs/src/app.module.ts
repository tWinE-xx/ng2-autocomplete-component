import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {AutoComplete} from 'ng2-autocomplete-component/components';
import {AutoCompleteConfig} from 'ng2-autocomplete-component/components';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule],
    declarations: [AppComponent, AutoComplete],
    bootstrap: [AppComponent]
})
export class AppModule {debugger;}