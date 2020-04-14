import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];


export interface TableEntry {
  group_leader: string;
  group_size: number;
  timestamp: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
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
	displayedColumns: string[] = ['location', 'name', 'weight', 'symbol'];
  // dataSource = ELS;

  @Input() data: TableFrame[];

  // processing data
  get wrapperData() {
    for (let j = 0; j < this.data.length; j++) {
      let cnt = 0;
      for (let i = this.data[j].records.length - 1; i > 0; i--) {
        if (this.getDay(this.data[j].records[i].timestamp) != this.getDay(this.data[j].records[i-1].timestamp)) {
          this.data[j].records[i].group_size = cnt + 1;
          cnt = 0;
        } else {
          cnt++;
        }
      }

      if (cnt > 0)
        this.data[j].records[0].group_size = cnt + 1; // why +1
    }

    return this.data;
  }

  constructor() { }

  ngOnInit(): void {
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
