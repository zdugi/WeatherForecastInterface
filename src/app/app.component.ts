import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ManagerDialogComponent, DisplayManagerSettings } from './manager-dialog/manager-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hci-weather-forecast';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ManagerDialogComponent);

    dialogRef.componentInstance.globalSettings = {
          locations: [],
    displayProperty: 'Temperature',
    forecastInterval: 2
        }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  updateDisplay() {
    console.log('apply changes')
  }
}
