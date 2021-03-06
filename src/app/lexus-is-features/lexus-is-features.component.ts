import { Component, OnInit, ElementRef } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';
import { CarService } from '../shared/model/car.service';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-lexus-is-features',
  templateUrl: './lexus-is-features.component.html',
  styleUrls: ['./lexus-is-features.component.scss']
})
export class LexusIsFeaturesComponent implements OnInit {
  private carId = '1';
  private car;
  private carPrice;

  constructor(
    private _: SimpleGlobal,
    private elRef: ElementRef,
    private carService: CarService) { }

  ngOnInit() {
    this.setBackgroundContext('alt');
    this.car = this.carService.getCarById(this.carId);
    this.checkStoredCar();
    this.initSlick();
  }

  checkStoredCar(){
    if(this._['selectedCarPrice'] == '')
      this.storeSelectedCar()
  }
  
  initSlick() {
    $(document).ready(()=>{
      $('#car-features-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        swipe: true
      });
    })
  }

  storeSelectedCar() {
    this._['selectedCar'] = this.car.model;
    this._['selectedCarId'] = this.car.id;
    this._['selectedCarPrice'] = this.car.modelPrice;
  }







  /**
   * Repeated function to update core bg color based on viewed component
   * @param context is either main or alt to determine color
   */
  setBackgroundContext(context) {
    if(context == 'main')
      this.elRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000';
    else if(context == 'alt')
      this.elRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
  }
}
