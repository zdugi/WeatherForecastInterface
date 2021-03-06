import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';

import { ManagerDialogComponent, DisplayManagerSettings } from '../manager-dialog/manager-dialog.component';

import { availableLocations } from '../hermes.service';

export interface Location {
  name: string;
}

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  allLocations: string[] = availableLocations;

  errorMessage: string = ''

  constructor() {
  }

  locations: Location[] = [
  ];

  @Input()
  get loc() {
    return this.locations;
  }

  @Output() locationsChange = new EventEmitter();
  set loc(val) {
    this.locations = val;
    this.locationsChange.emit(this.locations);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (!value)
      return

    // binary search
    var i = 0;
    var j = this.allLocations.length;
    var flag = false;

    while (i <= j && !flag) {
      var pivot = i + Math.floor((j - i) / 2);
      var pivotValue = this.allLocations[pivot];

      // console.log(pivotValue, i, j)
      
      if (value == pivotValue) {
        flag = true;
      }
      else if (pivotValue < value) {
        i = pivot + 1;
      } else {
        j = pivot - 1;
      }

    }

    if (!flag) {
      input.value = ''
      this.errorMessage = 'Invalid city name ' + value;
      return
    }

    this.errorMessage = ''

    for (let loc of this.loc) {
      if (loc.name == value) {
        this.errorMessage = value + ' is already in list';
        return;
      }
    }

    if ((value || '').trim()) {
      this.loc.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(location: Location): void {
    const index = this.loc.indexOf(location);

    if (index >= 0) {
      this.loc.splice(index, 1);
    }
  }
}
