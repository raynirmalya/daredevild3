import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './charts/pie/pie.component';
import { PdfMakeService } from './pdf-make/pdf-make.service';

@NgModule({
  declarations: [AppComponent, PieComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PdfMakeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
