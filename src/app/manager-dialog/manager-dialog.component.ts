import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Location } from '../location-input/location-input.component';

export interface DisplayManagerSettings {
  locations: string[];
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
  
  @Input() globalSettings: DisplayManagerSettings;

  @Output() displaySettingsChange = new EventEmitter();

  set model(val) {
    console.log('update')
    this.displaySettings = val
    this.displaySettingsChange.emit(this.displaySettings)
  }

  constructor() { }

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
