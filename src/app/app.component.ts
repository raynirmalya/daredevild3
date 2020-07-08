import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dfive';
  chartData = [
    { region: 'North', count: '53245' },
    { region: 'South', count: '28479' },
    { region: 'East', count: '19697' },
    { region: 'West', count: '24037' },
    { region: 'Central', count: '40245' }
  ];
}
