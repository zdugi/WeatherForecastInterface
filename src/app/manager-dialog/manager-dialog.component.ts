import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Location } from '../location-input/location-input.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DisplayManagerSettings {
  locations: Location[];
  displayProperty: string;
  forecastInterval: number;
}

@Component({
  selector: 'app-manager-dialog',
  templateUrl: './manager-dialog.component.html',
  styleUrls: ['./manager-dialog.component.css']
})

export class ManagerDialogComponent implements OnInit {
  displaySettings: DisplayManagerSettings = {
  	locations: [
    ],
  	displayProperty: 'Temperature',
  	forecastInterval: 2
  }

  @Input() settings: DisplayManagerSettings;
  @Output() public onSubmit: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  displaySliderValue(value: number) {
  	return value + "d"
  }

  applyChanges() {
    this.onSubmit.emit();
  }
}
