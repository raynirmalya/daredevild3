import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PdfMakeService } from './pdf-make/pdf-make.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dfive';
  svg: string;
  @ViewChild('dfivepie', {static: true}) dfivepie: ElementRef;
  chartData = [
    { region: 'North', count: '53245' },
    { region: 'South', count: '28479' },
    { region: 'East', count: '19697' },
    { region: 'West', count: '24037' },
    { region: 'Central', count: '40245' }
  ];
  constructor(private pdfMakeService: PdfMakeService) {

  }
  ngAfterViewInit(): void {
    // console.log(this.dfivepie['chartElement'].nativeElement, this.dfivepie['chartElement'].nativeElement.innerHTML);
    // const svg = this.dfivepie['chartElement'].nativeElement.innerHTML;
    // this.pdfMakeService.addSvg(svg);
    setTimeout(() => {
      console.log('111', this.dfivepie['chartElement'].nativeElement.innerHTML);
    }, 2000)
  }

  public generatePdf(): void {
    this.pdfMakeService.downloadPdf('download');
  }
  sendSvg($event) {
    this.svg = $event;
    console.log(this.svg)
    this.pdfMakeService.addSvg(this.svg);
  }
}
