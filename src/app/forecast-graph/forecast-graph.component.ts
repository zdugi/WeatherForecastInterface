import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { PartialWeatherRecord } from '../hermes.service';

const COLORS: number = 20;

@Component({
  selector: 'app-forecast-graph',
  templateUrl: './forecast-graph.component.html',
  styleUrls: ['./forecast-graph.component.css']
})
export class ForecastGraphComponent implements OnInit {
  @Input() data: ChartDataSets[];
  @Input() labels: Label[];

  @Input() unitsLabel: string;

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          scaleLabel: {
            display: true,
            labelString: 'merena vrednost'
          }
        },
      ]
    },
  };

  get options() : ChartOptions {
    this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString = this.unitsLabel;
    return this.lineChartOptions;
  }

  public lineChartColors: Color[] = [];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {
    
  }

  // find better way
  public setLabel(label) {
    this.lineChartOptions.scales.yAxes[0].scaleLabel.labelString = 'zdravko';
  }

  ngOnInit() {
  }
}
