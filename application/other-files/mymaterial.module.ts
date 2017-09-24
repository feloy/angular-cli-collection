import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdIconModule],
  exports: [MdButtonModule, MdIconModule],
})
export class MyMaterialModule { }
