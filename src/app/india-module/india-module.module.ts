import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelhiComponent } from '../delhi/delhi.component';

@NgModule({
  declarations: [DelhiComponent],
  imports: [
    CommonModule
  ],
  exports: [DelhiComponent]
})
export class IndiaModuleModule { }
