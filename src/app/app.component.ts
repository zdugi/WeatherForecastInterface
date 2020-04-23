import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DisplayManagerSettings } from './manager-dialog/manager-dialog.component';
import { HermesService, WeatherResponse, WeatherRecord, PartialWeatherRecord, PartialRecord } from './hermes.service';
import { Location } from './location-input/location-input.component';
import { TableFrame, TableEntry } from './forecast-table/forecast-table.component';
import { ForecastGraphComponent } from './forecast-graph/forecast-graph.component';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

const KELVIN_CONSTANT = 273.15;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'hci-weather-forecast';

  globalSettings: DisplayManagerSettings = {
    locations: [{name: 'Novi Sad'}, {name: 'London'}] as Location[],
    displayProperty: 'temperature',
    forecastInterval: 2
  }

  graphData: ChartDataSets[] = []
  graphLabels: Label[] = []
  tableData: TableFrame[] = []
  forecastingTitle: string = '';
  unitsLabel: string = '';


  constructor(public dialog: MatDialog, private messenger: HermesService) {
  	this.updateDisplay();
  }

  private castTemperature(kelvins: number) : number {
  	// convert to Celsius
  	return +(kelvins - KELVIN_CONSTANT).toFixed(2);
  }

  ngOnInit() {

  }

  public updateDisplay() : void {
    this.forecastingTitle = 'Forecast for ' + this.globalSettings.forecastInterval + ' days';

    // clean
    this.graphData.length = 0
    this.graphLabels.length = 0
    this.tableData.length = 0;

    // for labels just in first call
    this.fetchData(this.globalSettings.locations[0]['name'], true, this.globalSettings.displayProperty)

    // process others
    for (let i = 1; i < this.globalSettings.locations.length; i++)
    {
      let location = this.globalSettings.locations[i];
      this.fetchData(location['name'], false, this.globalSettings.displayProperty)
    }
  }

  private fetchData(loc: string, generateChartLabels: boolean, graphType: string) : void {
  	this.messenger.getWeather(loc)
  	.subscribe((data: WeatherResponse) => {
  		let location = data.city.name;
  		let records = []

  		let frame = {
  			location: location,
  			records: []
  		}

  		// make units label
  		//TODO: optimise
  		switch (graphType) {
  			case 'temperature':
  			this.unitsLabel = "Temperature (Celsius)"
  			break;
  			case 'cloudiness':
  			this.unitsLabel = "Cloudiness (%)"
  			break;
  			case 'pressure':
  			this.unitsLabel = "Pressure (hPa)"
  			break;
  			case 'humidity':
  			this.unitsLabel = "Humidity (%)"
  		}

  		for (let rec of data.list) {
  			// days Limit
  			if (this.deltaDays(rec.dt_txt) > this.globalSettings.forecastInterval) {
  				continue;
  			}

  			// generate graph data
  			switch (graphType) {
  				case 'temperature':
         records.push(this.castTemperature(rec.main.temp))
         break;
         case 'cloudiness':
         records.push(rec.clouds.all)
         break;
         case 'pressure':
         records.push(rec.main.pressure)
         break;
         case 'humidity':
         records.push(rec.main.humidity)
       }

       if (generateChartLabels) {
         this.graphLabels.push(this.formatDatetime(rec.dt_txt))
       }

       // generate table data
       let entry = {
        group_leader: '',
        group_size: 0,
        timestamp: rec.dt_txt,
        temp: this.castTemperature(rec.main.temp),
        temp_min: this.castTemperature(rec.main.temp_min),
        temp_max: this.castTemperature(rec.main.temp_max),
        pressure: rec.main.pressure,
        humidity: rec.main.humidity,
        cloudiness: rec.clouds.all
      }
      frame.records.push(entry)
    }

    this.graphData.push(this.generateChartData(records, location))
    this.tableData.push(frame)
  });
  }

  // https://github.com/mariamrf/flat-color-generator
  private flatColor (h) {
    var PHI = 0.618033988749895; 
    var s, v, hue;
    if(h===undefined){
      hue = (Math.floor(Math.random()*(360 - 0 + 1)+0))/360;
      h = ( hue + ( hue / PHI )) % 360; 
    } 
    else h/=360;                                           
    v = Math.floor(Math.random() * (100 - 20 + 1) + 20);
    s = (v-10)/100;
    v = v/100;

    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    var finalColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    var color = {
      h: h,
      s: s,
      v: v,
      r: r,
      g: g,
      b: b,
      hex: finalColor
    }

    return color
  }

  
  private generateChartData(records, label) {
  	var fc = this.flatColor(undefined);

  	var r = fc.r;
    var g = fc.g;
    var b = fc.b;

    return {
    	data: records,
    	label: label,
      backgroundColor: 'rgba(' + r + ',' + g + ',' + b + ',0.2)',
      borderColor: 'rgba(' + r + ',' + g + ',' + b + ',1)',
      pointBackgroundColor: 'rgba(' + r + ',' + g + ',' + b + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(' + r + ',' + g + ',' + b + ',1)'
    };
  }


  // helpers
  private formatDatetime(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);
    // console.log(toks)

    let date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2])
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return toks[3] + 'h ' + days[date.getDay()];
  }

  private getDay(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);
    // console.log(toks)

    let date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2])
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[date.getDay()];
  }

  private deltaDays(timestamp: string) : number {
  	let date = new Date(timestamp);

  	var delta = date.getTime() - (new Date()).getTime();

  	return delta / (1000 * 60 * 60 * 24);
  }
}