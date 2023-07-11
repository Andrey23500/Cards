import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './pages/item/item.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
