import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
