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
  onApply: EventEmitter<any> = new EventEmitter();

  displaySettings: DisplayManagerSettings = {
  	locations: [
    ],
  	displayProperty: 'Temperature',
  	forecastInterval: 2
  }

  settings: DisplayManagerSettings;
  
  @Input() globalSettings: DisplayManagerSettings;

  @Output() displaySettingsChange = new EventEmitter();

  set model(val) {
    console.log('update')
    this.displaySettings = val
    this.displaySettingsChange.emit(this.displaySettings)
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.settings = data;
  }

  ngOnInit(): void {
  }

  displaySliderValue(value: number) {
  	return value + "d"
  }

  applyChanges() {
    console.log('ucitano')
  }

  revertChanges() {

  }
}
