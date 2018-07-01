import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';
import { CarService } from '../shared/model/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectCarComponent implements OnInit {

  private cars: {
    id: string, url: string, model: string, shortModel: string, mainHeading: string,
    mainImagePath: string, footerImagePath: string, detailsImagePath: string, finalImagePath: string,
    modelPrice: string, featureContent: {featureImagePath: string, featureHeading: string, featureCopy: string}[]
  }[] = [];

  constructor(private _: SimpleGlobal, private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.cars = this.carService.getAllCars();
  }

  selectCarModel(carId) {
    let car = this.carService.getCarById(carId);
    this.storeSelectedCar(car);
    this.router.navigateByUrl(car.url);
  }

  moveOn() {

  }

  storeSelectedCar(car) {
    this._['selectedCar'] = car.model;
    this._['selectedCarId'] = car.id;
    this._['selectedCarPrice'] = car.modelPrice;
  }

}
