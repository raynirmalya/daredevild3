import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { ChartConfig } from './chart-config.model';
import * as d3 from 'd3';
import * as _ from 'lodash';
@Component({
  selector: 'dfive-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnChanges, AfterViewInit {
  @Input() chartConfig: ChartConfig;
  @Input() chartData: any;
  @ViewChild('chart', { static: true }) chartElement: ElementRef;
  private defaultWidth = 200;
  private defaultHeight = 200;
  private radius: number = null;
  private svg = null;
  private pie = null;
  private arc = null;
  private chartColor: string[] = [
    '#66c2a5',
    '#fc8d62',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f'
  ];

  isArrayEqual(x: any, y: any) {
    return _(x)
      .differenceWith(y, _.isEqual)
      .isEmpty();
  }
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      changes,
      this.chartData,
      this.isArrayEqual(
        changes.chartData.previousValue,
        changes.chartData.currentValue
      )
    );
    if (
      changes.chartData.previousValue !== changes.chartData.currentValue &&
      changes.chartData.currentValue.length > 0
    ) {
      this.init();
      if (this.chartElement && this.chartElement.nativeElement) {
        this.createChart();
      }
    }
  }

  ngAfterViewInit() {
    if (this.chartElement && this.chartElement.nativeElement) {
      this.createChart();
    }
  }

  private init() {
    if (!this.chartConfig) {
      this.chartConfig = {} as ChartConfig;
      this.chartConfig.id = 'chart-area';
      this.chartConfig.height = this.defaultHeight;
      this.chartConfig.width = this.defaultWidth;
      this.chartConfig.color = this.chartColor;
    }
  }

  private createSvg() {
    this.svg = d3
      .select(this.chartElement.nativeElement)
      .append('svg')
      .attr('width', this.chartConfig.width)
      .attr('height', this.chartConfig.height)
      .append('g')
      .attr(
        'transform',
        `translate(${this.chartConfig.width / 2}, ${this.chartConfig.height /
          2})`
      );
  }

  private createPie() {
    this.pie = d3
      .pie()
      .value(d => d.count)
      .sort(null);
  }

  private createArc() {
    this.arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(this.radius);
  }

  private createPath() {
    const outerThis = this;
    const path = this.svg.selectAll('path')
    .data(this.pie(this.chartData));
    path
      .enter()
      .append('path')
      .attr('fill', (d, i) => this.chartConfig.color[i])
      .on('mouseover', function(d) {
        d3.select(this).attr('opacity', 0.8);
     }).on('mouseout', function(d) {
       d3.select(this).attr('opacity', 1);
    })
      .transition()
      .delay((d, i) => {
        return i * 200;
      })
      .attrTween('d', d => {
        const i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
        return t => {
          d.endAngle = i(t);
          return outerThis.arc(d);
        };
      })
      .attr('stroke', 'white')
      .attr('stroke-width', '2px');
  }
  private createChart() {
    d3.select(this.chartElement.nativeElement).html('');
    this.radius = Math.min(this.chartConfig.width, this.chartConfig.height) / 2;
    this.createSvg();
    this.createPie();
    this.createArc();
    this.createPath();
  }
}
