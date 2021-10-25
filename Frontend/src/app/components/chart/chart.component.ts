import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

public ChartDataset = {}

public barCharOptions = {
  scaleShowVerticalLines: false,
  responsive : true
}

public barCharLabels = ['1', '2', '3']

public barCharData = [
  // {data: [15, 12, 23, 42], label: 'no'}
];

  ngOnInit(): void {
  }

}
