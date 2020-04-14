import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ManagerDialogComponent, DisplayManagerSettings } from './manager-dialog/manager-dialog.component';
import { HermesService, WeatherResponse, WeatherRecord, PartialWeatherRecord, PartialRecord } from './hermes.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hci-weather-forecast';

  globalSettings: DisplayManagerSettings = {
          locations: [],
    displayProperty: 'Temperature',
    forecastInterval: 2
        }

  graphData: ChartDataSets[] = []
  graphLabels: Label[] = []


  magi = [];

  constructor(public dialog: MatDialog, private messenger: HermesService) {}

  openDialog() {
    const dialogRef = this.dialog.open(ManagerDialogComponent);

    dialogRef.componentInstance.globalSettings = this.globalSettings

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('api call')
        
        this.messenger.getWeather(this.globalSettings)
        .subscribe((data: WeatherResponse) => {
          console.log(data.city.name)

          let dataCollection = {
            location: data.city.name,
            records: []
          }

          for (let rec of data.list) {
            // add temp
            dataCollection.records.push(rec.main.temp)

            console.log(rec.dt_txt, rec.main.temp, rec.main.humidity, rec.main.pressure)

            // this just once
            this.graphLabels.push(this.formatDatetime(rec.dt_txt))
          }

          // here magic
          this.graphData.length = 0
          this.graphData.push({ data: dataCollection.records, label: dataCollection.location})
        })
      }
    });
  }

  updateDisplay() {
    console.log('apply changes')
  }


  // helpers
  formatDatetime(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);
    console.log(toks)

    let date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2])
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return toks[3] + 'h ' + days[date.getDay()];
  }
}
