import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private _: SimpleGlobal) {}
  
  ngOnInit() {
    this.setupGlobals();
  }

  setupGlobals() {
    this._['selectedCar'] = '';
    this._['selectedCarId'] = '';
    this._['selectedCarPrice'] = '';
    this._['selectedLocation'] = '';
    this._['selectedDate'] = '';
    this._['selectedTime'] = '';
    this._['customerName'] = '';
    this._['customerMobile'] = '';
    this._['customerEmail'] = '';
  }
}

