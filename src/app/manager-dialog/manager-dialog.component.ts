import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-manager-dialog',
  templateUrl: './manager-dialog.component.html',
  styleUrls: ['./manager-dialog.component.css']
})
export class ManagerDialogComponent implements OnInit {
	minValue: number = 100;
	maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor() { }

  ngOnInit(): void {
  }

}
