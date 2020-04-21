import { Component, OnInit, Input, Inject } from '@angular/core';
import { TableFrame, TableEntry } from '../forecast-table/forecast-table.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})

export class DetailsDialogComponent implements OnInit {
	data: TableFrame;

	selectedDay: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data2: any) {
  	this.data = data2.frame;
  }

  ngOnInit(): void {
  }

  get columns() : string[] {
  	var columns = [];

  	for (let e of this.data.records) {
  		let day = this.getDay(e.timestamp);

  		if (columns.indexOf(day) == -1)
  			columns.push(day)
  	}

  	return columns
  }

  get rows() {
  	var rows = [];
  	//TODO: make life better...
  	var day = this.selectedDay == undefined ? this.getDay(this.data.records[0].timestamp) : this.selectedDay

  	for (let e of this.data.records) {
  		if (day == this.getDay(e.timestamp))
  			rows.push(e)
  	}

  	return rows;
  }

  private getDay(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);
    // console.log(toks)

    let date = new Date(toks[0] + '/' + toks[1] + '/' + toks[2])
    let days = ['Sunday', 'Monday', 'Tuestay', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return days[date.getDay()];
  }

  onWeekChange(day: string) : void {
  	this.selectedDay = day;
  }

  getHour(timestamp: string) : string {
    let toks = timestamp.split(/[-: ]+/);

    return toks[3] + 'h';
  }
}
