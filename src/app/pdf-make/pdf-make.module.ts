import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfMakeService } from './pdf-make.service';
import { TableUtilService } from './util/table.util.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PdfMakeService,
    TableUtilService
  ]
})
export class PdfMakeModule { }
