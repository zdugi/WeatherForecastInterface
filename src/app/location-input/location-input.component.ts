import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

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
