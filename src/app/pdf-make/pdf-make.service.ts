import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import { DocDef } from './model/pdfmake.model';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable()
export class PdfMakeService {
  private pdfDocDef: DocDef = { content: []} as DocDef;

  /**
   * svg related varibales
   */
  private svgWidth = 540;
  private svgHeight = 540;

  constructor() {
  }

  private resetPdfMakeDocDef() {
    this.pdfDocDef = { content: []};
  }
  downloadPdf(action = 'download') {
    console.log(this.pdfDocDef, pdfMake.createPdf(this.pdfDocDef), pdfMake.createPdf(this.pdfDocDef).download());
    const pdfDocGenerator = pdfMake.createPdf(this.pdfDocDef);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      console.log(dataUrl);
    })
    switch (action) {
      case 'open': pdfMake.createPdf(this.pdfDocDef).open(); break;
      case 'print': pdfMake.createPdf(this.pdfDocDef).print(); break;
      case 'download': pdfMake.createPdf(this.pdfDocDef).download(); break;

      default: pdfMake.createPdf(this.pdfDocDef).open(); break;
    }
  }

  private setSvgDimension(width: number, height: number) {
    this.svgWidth = width;
    this.svgHeight = height;
  }
  public addSvg(svg: string, width: number = this.svgWidth, height: number = this.svgHeight) {
    this.pdfDocDef.content.push({svg, width: this.svgWidth, height: this.svgHeight});
  }
}
