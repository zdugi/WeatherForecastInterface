import { Component, OnInit, Input } from '@angular/core';

import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import {MatDialog} from '@angular/material/dialog';

export interface TableEntry {
  group_leader: string;
  group_size: number;
  timestamp: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  cloudiness: number;
}

export interface TableFrame {
  location: string;
  records: TableEntry[];
}


@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css']
})



export class ForecastTableComponent implements OnInit {
	displayedColumns: string[] = ['location', 'temp', 'minTemp', 'maxTemp', 'pressure', 'humidity'];
  // dataSource = ELS;

  @Input() data: TableFrame[];

  // processing data
  get wrapperData() {
    console.log(this.data.length)
    return this.data;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetails(details) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data:{
        frame: details,
        location: location
      } 
    });

    console.log('ok')
  }

  // helper
  getDay(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);
    // console.log(toks)

    let date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2])
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[date.getDay()];
  }

  getHour(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);

    return toks[3];
  }
}
