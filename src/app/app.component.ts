import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ManagerDialogComponent, DisplayManagerSettings } from './manager-dialog/manager-dialog.component';
import { HermesService, WeatherResponse, WeatherRecord, PartialWeatherRecord, PartialRecord } from './hermes.service';

import { Location } from './location-input/location-input.component';

import { TableFrame, TableEntry } from './forecast-table/forecast-table.component';

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


  tableData: TableFrame[] = []


  magi = [];

  constructor(public dialog: MatDialog, private messenger: HermesService) {}

  openDialog() {
    const dialogRef = this.dialog.open(ManagerDialogComponent);

    dialogRef.componentInstance.globalSettings = this.globalSettings

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.graphData.length = 0
        this.graphLabels.length = 0

        // for labels just in first call
        this.messenger.getWeather(this.globalSettings.locations[0]['name'])
        .subscribe((data: WeatherResponse) => {
          let location = data.city.name;
          let records = [];

          let frame = {
            location: location,
            records: []
          }

          for (let rec of data.list) {
            records.push(rec.main.temp);
            // make graph labels
            this.graphLabels.push(this.formatDatetime(rec.dt_txt))

            let entry = {
              group_leader: '',
              group_size: 0,
              timestamp: rec.dt_txt,
              temp: rec.main.temp,
              temp_min: rec.main.temp_min,
              temp_max: rec.main.temp_max,
              pressure: rec.main.pressure,
              humidity: rec.main.humidity
            }

            let currDay = this.getDay(rec.dt_txt);
            let lastDay = ''

            if (frame.records.length > 0)
              lastDay = this.getDay(frame.records[frame.records.length - 1].timestamp)

            if (frame.records.length == 0 ||
                currDay != lastDay) {
              entry.group_leader = currDay;
            }

            frame.records.push(entry)
          }

          this.graphData.push({ data: records, label: location})

          this.tableData.push(frame)
        })

        // process others
        for (let i = 1; i < this.globalSettings.locations.length; i++)
        {
          // warning: because typescript use this dynamically, dictionary access
          let location = this.globalSettings.locations[i];
          this.messenger.getWeather(location['name'])
          .subscribe((data: WeatherResponse) => {
            let location = data.city.name;
            let records = []

            let frame = {
              location: location,
              records: []
            }

            for (let rec of data.list) {
              records.push(rec.main.temp)

              let entry = {
                group_leader: '',
                group_size: 0,
                timestamp: rec.dt_txt,
                temp: rec.main.temp,
                temp_min: rec.main.temp_min,
                temp_max: rec.main.temp_max,
                pressure: rec.main.pressure,
                humidity: rec.main.humidity
              }


              let currDay = this.getDay(rec.dt_txt);
              let lastDay = ''

              if (frame.records.length > 0)
                lastDay = this.getDay(frame.records[frame.records.length - 1].timestamp)

              if (frame.records.length == 0 ||
                  currDay != lastDay) {
                entry.group_leader = currDay;
              }


              frame.records.push(entry)
            }

            //console.log(rec.dt_txt, rec.main.temp, rec.main.humidity, rec.main.pressure)
            this.graphData.push({ data: records, label: location})

            this.tableData.push(frame)
          })
        }
      }
    });
  }

  updateDisplay() {
    console.log('apply changes')
  }


  // helpers
  formatDatetime(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);
    // console.log(toks)

    let date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2])
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return toks[3] + 'h ' + days[date.getDay()];
  }

  getDay(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);
    // console.log(toks)

    let date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2])
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[date.getDay()];
  }
}
