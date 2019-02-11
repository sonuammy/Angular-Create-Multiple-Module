import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndiaModuleModule } from './india-module/india-module.module';
import { IndiaComponent } from './india/india.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent
  ],
  imports: [
    BrowserModule,IndiaModuleModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
