import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

import { ForecastGraphComponent } from './forecast-graph/forecast-graph.component'
import { ForecastTableComponent } from './forecast-table/forecast-table.component'

import { ChartsModule } from 'ng2-charts';
import { ManagerDialogComponent } from './manager-dialog/manager-dialog.component';
import { LocationInputComponent } from './location-input/location-input.component';


import {MatChipsModule} from '@angular/material/chips';


import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';

import { Ng5SliderModule } from 'ng5-slider';

import {MatTableModule} from '@angular/material/table'; 

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ForecastGraphComponent,
    ForecastTableComponent,
    ManagerDialogComponent,
    LocationInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  	MatButtonModule,
  	MatSliderModule,
  	MatDialogModule,
  	MatChipsModule,
  	ChartsModule,
  	MatFormFieldModule,
  	MatIconModule,
  	MatSelectModule,
  	Ng5SliderModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
