import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carPath: string = '/assets/images/cars/';
  constructor() { }

  getAllCars() {
    return this.cars;
  }
  getCarById(id: string) {
    const car = this.cars.find((s) => {
      return s.id === id;
    });
    return car;
  }
  
  private cars = [
    {
      id: '1',
      url: '/lexus-is-features',
      model: 'LEXUS IS',
      shortModel: 'IS',
      mainHeading: 'A stirring expression of style and power.',
      mainImagePath: this.carPath+'lexus-is/lexus-is-main.jpg',
      footerImagePath: this.carPath+'lexus-is/lexus-is-footer.jpg',
      detailsImagePath: this.carPath+'lexus-is/lexus-is-details.jpg',
      finalImagePath: this.carPath+'lexus-is/lexus-is-final.jpg',
      modelPrice: 'From NZ $69,900',
      featureContent: [
        {
          featureImagePath: this.carPath+'lexus-is/features/bold-dynamic-design.jpg',
          featureHeading: 'Bold Dynamic Design ',
          featureCopy: 'With an ergonomically laid out interior and strong dedication to every detail. Distinctive exterior including the infamous L-shaped daytime running lights.',
        },{
          featureImagePath : this.carPath+'lexus-is/features/lexus-safety-system.jpg',
          featureHeading: 'Lexus Safety System +',
          featureCopy: 'The package includes advanced driver assistance functions such as the Pre-Crash Safety system with Autonomous Emergency Braking System, Dynamic Radar Cruise Control, Lane-Departure Alert and Automatic High Beam. The IS has all you need and more for a safe drive.',
        },{
          featureImagePath : this.carPath+'lexus-is/features/drive-mode-select.jpg',
          featureHeading: 'Drive Mode Select',
          featureCopy: 'Select performance to match your driving style with three drive modes: NORMAL, ECO and SPORT, enjoy the optimal performance for your drive.',
        },{
          featureImagePath : this.carPath+'lexus-is/features/multimedia-display.jpg',
          featureHeading: '10.3" Multimedia Display',
          featureCopy: 'The high-resolution split-screen, contains a multi-information display, with access to audio or climate controls and other systems including navigation, plus a full-screen map for added convenience.',
        },{
          featureImagePath : this.carPath+'lexus-is/features/hybrid.jpg',
          featureHeading: 'Hybrid',
          featureCopy: '2.5L Hybrid electric, drawing power from both electric and petrol motors, resulting in instant torque and surprising acceleration.',
        },{
          featureImagePath : this.carPath+'lexus-is/features/180kw-power-output.jpg',
          featureHeading: 'Up to 180kw power output',
          featureCopy: 'The IS 300 has up to 180 kW power output plus 350 Nm max torque, 0-100kms in 7 seconds. Plus, to conserve your fuel for a longer ride, the automatic Stop & Start system shuts off the engine when your IS is stopped at lights or in traffic.',
        },{
          featureImagePath : this.carPath+'lexus-is/features/8-speed-direct-shift-transmission.jpg',
          featureHeading: '8 Speed Direct Shift Transmission',
          featureCopy: 'For minimal energy loss and increased efficiency our new compact transmission provides the ideal gear combination for performance or economy.',
        },{
          featureImagePath : this.carPath+'lexus-is/features/warranty.jpg',
          featureHeading: 'Warranty',
          featureCopy: 'Refer to your Lexus Dealership.',
        }
      ]
    },{
    //   id: '2',
    //   url: '/lexus-es-features',
    //   model: 'LEXUS ES',
    //   shortModel: 'ES',
    //   mainHeading: 'Unprecedented luxury. An everyday reward.',
    //   mainImagePath: this.carPath+'lexus-es/lexus-es-main.jpg',
    //   footerImagePath: this.carPath+'lexus-es/lexus-es-footer.jpg',
    //   detailsImagePath: this.carPath+'lexus-es/lexus-es-details.jpg',
    //   finalImagePath: this.carPath+'lexus-es/lexus-es-final.jpg',
    //   modelPrice: 'From NZ $74,990',
    //   featureContent: [
    //     {
    //       featureImagePath : this.carPath+'lexus-es/refined-luxurious-drive.jpg',
    //       featureHeading: 'Refined Luxurious Drive (ES 300h Limited)',
    //       featureCopy: 'With a beautiful trim, polished to a high sheen, ambient illumination on the interior compliments the sleek lines of the exterior.',
    //     },{
    //       featureImagePath : this.carPath+'lexus-es/ultra-low-emissions.jpg',
    //       featureHeading: 'Ultralow Emissions',
    //       featureCopy: 'The ES 300h and ES 300h Limited deliver superb engine power with lower carbon emissions at 130 g/km.',
    //     },{
    //       featureImagePath : this.carPath+'lexus-es/fuel-consumption.jpg',
    //       featureHeading: 'Rated at 5.5L/100kms Fuel Consumption ',
    //       featureCopy: 'Excellent Fuel Economy and reduced emissions, utilising the hybrid electric technology.',
    //     },{
    //       featureImagePath : this.carPath+'lexus-es/exceptional-comfort.jpg',
    //       featureHeading: 'Exceptional Comfort',
    //       featureCopy: 'The ES is designed with your comfort in mind, from the Shimomoku ornamentation to the beautifully crafted leather seats to the technology available to get you to your destination effortlessly.',
    //     },{
    //       featureImagePath : this.carPath+'lexus-es/lexus-safety-system.jpg',
    //       featureHeading: 'Lexus Safety System +',
    //       featureCopy: 'The package includes advanced driver assistance functions such as the Pre-Crash Safety system with Autonomous Emergency Braking System, Dynamic Radar Cruise Control, Lane-Departure Alert and Automatic High Beam. The ES has all you need and more for a safe drive.',
    //     },{
    //       featureImagePath : this.carPath+'lexus-es/15-speaker-mark-levinson-audio.jpg',
    //       featureHeading: '15 Speaker Mark Levinson Audio (ES 300h Limited)',
    //       featureCopy: '15 Speaker Mark Levinson Premium Audio system surrounding the interior of the car creates an authentic sound experience combing both mid and high frequencies, fuelling a rich full sound in every seat.',
    //     },{
    //       featureImagePath : this.carPath+'lexus-es/heated-and-ventilated-seats.jpg',
    //       featureHeading: 'Heated and Ventilated Seats',
    //       featureCopy: 'With seat temperature control (front and rear - temperature controls for front and rear only in Limited), easy access systems and lumbar support, find comfort in every drive. And have peace of mind with the Whiplash Injury Lessening (WIL) Concept Front Seat Design.',
    //     },{
    //       featureImagePath : this.carPath+'lexus-es/warranty.jpg',
    //       featureHeading: 'Warranty',
    //       featureCopy: 'Refer to your Lexus Dealership.',
    //     }
    //   ],
    // },{
      id: '2',
      url: '/lexus-gs-features',
      model: 'LEXUS GS',
      shortModel: 'GS',
      mainHeading: 'Unprecedented luxury. An everyday reward.',
      mainImagePath: this.carPath+'lexus-gs/lexus-gs-main.jpg',
      footerImagePath: this.carPath+'lexus-gs/lexus-gs-footer.jpg',
      detailsImagePath: this.carPath+'lexus-gs/lexus-gs-details.jpg',
      finalImagePath: this.carPath+'lexus-gs/lexus-gs-final.jpg',
      modelPrice: 'From NZ $74,990',
      featureContent: [
        {
          featureImagePath : this.carPath+'lexus-gs/refined-luxurious-drive.jpg',
          featureHeading: 'Refined Luxurious Drive (ES 300h Limited)',
          featureCopy: 'With a beautiful trim, polished to a high sheen, ambient illumination on the interior compliments the sleek lines of the exterior.',
        },{
          featureImagePath : this.carPath+'lexus-gs/ultra-low-emissions.jpg',
          featureHeading: 'Ultralow Emissions',
          featureCopy: 'The ES 300h and ES 300h Limited deliver superb engine power with lower carbon emissions at 130 g/km.',
        },{
          featureImagePath : this.carPath+'lexus-gs/fuel-consumption.jpg',
          featureHeading: 'Rated at 5.5L/100kms Fuel Consumption ',
          featureCopy: 'Excellent Fuel Economy and reduced emissions, utilising the hybrid electric technology.',
        },{
          featureImagePath : this.carPath+'lexus-gs/exceptional-comfort.jpg',
          featureHeading: 'Exceptional Comfort',
          featureCopy: 'The ES is designed with your comfort in mind, from the Shimomoku ornamentation to the beautifully crafted leather seats to the technology available to get you to your destination effortlessly.',
        },{
          featureImagePath : this.carPath+'lexus-gs/lexus-safety-system.jpg',
          featureHeading: 'Lexus Safety System +',
          featureCopy: 'The package includes advanced driver assistance functions such as the Pre-Crash Safety system with Autonomous Emergency Braking System, Dynamic Radar Cruise Control, Lane-Departure Alert and Automatic High Beam. The ES has all you need and more for a safe drive.',
        },{
          featureImagePath : this.carPath+'lexus-gs/15-speaker-mark-levinson-audio.jpg',
          featureHeading: '15 Speaker Mark Levinson Audio (ES 300h Limited)',
          featureCopy: '15 Speaker Mark Levinson Premium Audio system surrounding the interior of the car creates an authentic sound experience combing both mid and high frequencies, fuelling a rich full sound in every seat.',
        },{
          featureImagePath : this.carPath+'lexus-gs/heated-and-ventilated-seats.jpg',
          featureHeading: 'Heated and Ventilated Seats',
          featureCopy: 'With seat temperature control (front and rear - temperature controls for front and rear only in Limited), easy access systems and lumbar support, find comfort in every drive. And have peace of mind with the Whiplash Injury Lessening (WIL) Concept Front Seat Design.',
        },{
          featureImagePath : this.carPath+'lexus-gs/warranty.jpg',
          featureHeading: 'Warranty',
          featureCopy: 'Refer to your Lexus Dealership.',
        }
      ],
    },{
      id: '3',
      url: '/lexus-nx-features',
      model: 'LEXUS NX',
      shortModel: 'NX',
      mainHeading: 'Lead at every turn.',
      mainImagePath: this.carPath+'lexus-nx/lexus-nx-main.jpg',
      footerImagePath: this.carPath+'lexus-nx/lexus-nx-footer.jpg',
      detailsImagePath: this.carPath+'lexus-nx/lexus-nx-details.jpg',
      finalImagePath: this.carPath+'lexus-nx/lexus-nx-final.jpg',
      modelPrice: 'From NZ $82,400',
      featureContent: [
        {
          featureImagePath : this.carPath+'lexus-nx/striking-bold-design.jpg',
          featureHeading: 'Striking and Bold Design',
          featureCopy: 'Sharp-edged exterior and fun to drive the NX series strikes the right balance between you and the road.',
        },{
          featureImagePath : this.carPath+'lexus-nx/electric-hybrid-or-turbo-petrol.jpg',
          featureHeading: '2.5L Electric Hybrid or 2.0L Turbo Petrol',
          featureCopy: 'Love your drive with the option of a powerful, fuel-efficient 2.5-litre hybrid electric engine. Experience the best of both worlds – impressive power and reduced emissions – with the NX Hybrid.',
        },{
          featureImagePath : this.carPath+'lexus-nx/modern-interior-design.jpg',
          featureHeading: 'Modern Interior Design',
          featureCopy: 'Soft interior materials harmoniously interact with hard metallic surfaces to reflect the structural beauty of the NX.',
        },{
          featureImagePath : this.carPath+'lexus-nx/wireless-mobile-phone-charging.jpg',
          featureHeading: 'Wireless Mobile Phone Charging (F Sport and Limited)',
          featureCopy: 'Intuitive design - Charge compatible smartphones and mobile devices on the go without the clutter of cables with the wireless charging tray.',
        },{
          featureImagePath : this.carPath+'lexus-nx/360-degree-view-camera.jpg',
          featureHeading: '360-Degree View Camera (F Sport and Limited)',
          featureCopy: 'Remove the guess work with the 360-degree view camera, improving your driving experience and safety.',
        },{
          featureImagePath : this.carPath+'lexus-nx/full-navigation-system.jpg',
          featureHeading: 'Full Navigation System',
          featureCopy: 'The new generation Lexus Premium Navigation provides a multitude of features making your drive even smoother.',
        },{
          featureImagePath : this.carPath+'lexus-nx/power-back-door.jpg',
          featureHeading: 'Power Back Door',
          featureCopy: 'The back door can be opened/closed by simply standing behind the back door while carrying the key and pressing the vehicle’s back door switch.',
        },{
          featureImagePath : this.carPath+'lexus-nx/warranty.jpg',
          featureHeading: 'Warranty',
          featureCopy: 'Refer to your Lexus Dealership.',
        }
      ],
    },{
      id: '4',
      url: '/lexus-rx-features',
      model: 'LEXUS RX',
      shortModel: 'RX',
      mainHeading: 'A sharper level of style & comfort.',
      mainImagePath: this.carPath+'lexus-rx/lexus-rx-main.jpg',
      footerImagePath: this.carPath+'lexus-rx/lexus-rx-footer.jpg',
      detailsImagePath: this.carPath+'lexus-rx/lexus-rx-details.jpg',
      finalImagePath: this.carPath+'lexus-rx/lexus-rx-final.jpg',
      modelPrice: 'From NZ $95,900',
      featureContent: [
        {
          featureImagePath : this.carPath+'lexus-rx/striking-and-bold-design.jpg',
          featureHeading: 'Striking and Bold Design',
          featureCopy: 'The RX exudes untamed elegance. Get ready to blaze new trails with confidence-inspiring looks.',
        },{
          featureImagePath : this.carPath+'lexus-rx/8-speed-direct-shift.jpg',
          featureHeading: '8 Speed Automatic Transaxle Transmission (RX 350)',
          featureCopy: 'The eight-speed automatic transaxle delivers an exciting drive by transmitting greater fuel economy with smooth shifting and powerful acceleration.',
        },{
          featureImagePath : this.carPath+'lexus-rx/lexus-safety-system.jpg',
          featureHeading: 'Lexus Safety System +',
          featureCopy: 'The package includes advanced driver assistance functions such as the Pre-Crash Safety system with Autonomous Emergency Braking, All Speed Dynamic Radar Cruise Control System, Lane-Keeping Assist and Automatic High Beam (Adaptive high beam for the Limited). The RX has all you need and more for a safe drive.',
        },{
          featureImagePath : this.carPath+'lexus-rx/360-degree-view-camera.jpg',
          featureHeading: '360-Degree View Camera (F Sport and Limited)',
          featureCopy: 'Remove the guess work with the 360-degree view camera, improving your driving experience and safety.',
        },{
          featureImagePath : this.carPath+'lexus-rx/touch-free-rear-power-door.jpg',
          featureHeading: 'Touch Free Rear Power Door (F Sport & Limited)',
          featureCopy: 'A touchless power back door is available that enables the back door to be opened by holding a hand over part of the Lexus emblem.',
        },{
          featureImagePath : this.carPath+'lexus-rx/multimedia-display.jpg',
          featureHeading: '12.3" Multimedia Display',
          featureCopy: 'Electro Multi Vision Display (EMV), a landscape-oriented 12.3” large-sized screen. The Thin Film Transistor (TFT) liquid-crystal EMV display has high-quality In-Plane-Switching and a hoodless design that gives the interior a sense of spaciousness.',
        },{
          featureImagePath : this.carPath+'lexus-rx/triple-beam-led-headlights.jpg',
          featureHeading: 'Triple Beam LED Headlights (F Sport and Limited)',
          featureCopy: 'The iconic Lexus L-shaped clearance lamps complement the triple beam LED headlights, so your vehicle is immediately recognisable as a Lexus.',
        },{
          featureImagePath : this.carPath+'lexus-rx/warranty.jpg',
          featureHeading: 'Warranty',
          featureCopy: 'Refer to your Lexus Dealership.',
        }
      ]
    },{
      id: '5',
      url: '/lexus-lx-features',
      model: 'LEXUS LX',
      shortModel: 'LX',
      mainHeading: 'Conquer every summit with confidence.',
      mainImagePath: this.carPath+'lexus-lx/lexus-lx-main.jpg',
      footerImagePath: this.carPath+'lexus-lx/lexus-lx-footer.jpg',
      detailsImagePath: this.carPath+'lexus-lx/lexus-lx-details.jpg',
      finalImagePath: this.carPath+'lexus-lx/lexus-lx-final.jpg',
      modelPrice: 'From NZ $160,100',
      featureContent: [
        {
          featureImagePath : this.carPath+'lexus-lx/powerful-prestige.jpg',
          featureHeading: 'Powerful Prestige',
          featureCopy: 'Conquer every summit with confidence. An impressive full-sized luxury SUV with deluxe interior and seating for up to eight. For comfort and powerful prestige on and off-road.',
        },{
          featureImagePath : this.carPath+'lexus-lx/v8-turbo-diesel.jpg',
          featureHeading: '4.5L V8 Turbo Diesel',
          featureCopy: 'Drive Mode Select provides integrated control of multiple systems to let you tune performance to suit your driving style and maximise your 4.5L V8 turbo.',
        },{
          featureImagePath : this.carPath+'lexus-lx/fulltime-4wd.jpg',
          featureHeading: 'Fulltime 4WD',
          featureCopy: 'Be prepared for any terrain with full time 4WD, 20" (21” for the LX 570) aluminium wheels and get ready to own any road.',
        },{
          featureImagePath : this.carPath+'lexus-lx/lexus-safety-system.jpg',
          featureHeading: 'Lexus Safety System +',
          featureCopy: 'The package includes advanced driver assistance functions such as the Pre-Crash Safety system with Autonomous Emergency Braking, All Speed Dynamic Radar Cruise Control System, Lane-Keeping Assist and Automatic High Beam (Adaptive high beam for the Limited). The LX has all you need and more for a safe drive.',
        },{
          featureImagePath : this.carPath+'lexus-lx/advanced-off-road-capability.jpg',
          featureHeading: 'Advanced Off-Road Capability',
          featureCopy: 'Adaptive Variable Suspension continually adjusts shock-absorber damping rates while driving, combined with Multi-terrain select and CRAWL control, allows for a better off-road experience.',
        },{
          featureImagePath : this.carPath+'lexus-lx/multimedia-display.jpg',
          featureHeading: '12.3" Multimedia Display',
          featureCopy: 'Electro Multi Vision Display (EMV), a landscape-oriented 12.3" large-sized screen. The Thin Film Transistor (TFT) liquid-crystal EMV display has high-quality In-Plane-Switching and a hoodless design that gives the interior a sense of spaciousness.',
        },{
          featureImagePath : this.carPath+'lexus-lx/large-cargo-area.jpg',
          featureHeading: 'Large Cargo Area',
          featureCopy: 'The pinnacle of on-road and off-road luxury, with space to cater to your adventure and lifestyle needs.',
        },{
          featureImagePath : this.carPath+'lexus-lx/cool-box.jpg',
          featureHeading: 'Cool Box',
          featureCopy: 'The cool box is neatly integrated into the console and helps keep your beverages and other items nicely chilled.',
        },{
          featureImagePath : this.carPath+'lexus-lx/active-height-control.jpg',
          featureHeading: 'Active Height Control',
          featureCopy: 'An advanced suspension control system, to enhance off-road tracking performance.',
        },{
          featureImagePath : this.carPath+'lexus-lx/warranty.jpg',
          featureHeading: 'Warranty',
          featureCopy: 'Refer to your Lexus Dealership.',
        }
      ],
    },{
      id: '6',
      url: '/lexus-ct-features',
      model: 'LEXUS CT',
      shortModel: 'CT',
      mainHeading: 'A quiet revolution on city driving.',
      mainImagePath: this.carPath+'lexus-ct/lexus-ct-main.jpg',
      footerImagePath: this.carPath+'lexus-ct/lexus-ct-footer.jpg',
      detailsImagePath: this.carPath+'lexus-ct/lexus-ct-details.jpg',
      finalImagePath: this.carPath+'lexus-ct/lexus-ct-final.jpg',
      modelPrice: 'From NZ $51,690',
      featureContent: [
        {
          featureImagePath : this.carPath+'lexus-ct/compact-electric-hybrid-luxury.jpg',
          featureHeading: 'Compact Electric Hybrid Luxury',
          featureCopy: 'The first ever full hybrid electric luxury compact. The CT series gives you a rewarding combination of class-leading refinement and fuel efficiency.',
        },{
          featureImagePath : this.carPath+'lexus-ct/ultra-low-emissions.jpg',
          featureHeading: 'Ultra-Low Emissions',
          featureCopy: 'Low emissions and great fuel-efficiency, which means that it is great for you and the environment.',
        },{
          featureImagePath : this.carPath+'lexus-ct/fuel-consumption.jpg',
          featureHeading: 'Rated at 4.1L/100kms Fuel Consumption',
          featureCopy: 'The hybrid electric drive system has been optimized for use in a compact vehicle, improving fuel economy and reducing emissions.',
        },{
          featureImagePath : this.carPath+'lexus-ct/drive-mode-select.jpg',
          featureHeading: 'Drive Mode Select',
          featureCopy: 'Go from complete serenity to a dynamic and sporty drive with the Drive Mode Select function. With a simple turn of a knob, your drive becomes more responsive, efficient or smooth-riding for full driving enjoyment.',
        },{
          featureImagePath : this.carPath+'lexus-ct/dual-zone-climate-control.jpg',
          featureHeading: 'Dual Zone Climate Control',
          featureCopy: 'The air conditioning unit allows for independent temperature control for the driver and front passenger regions.',
        },{
          featureImagePath : this.carPath+'lexus-ct/seating.jpg',
          featureHeading: 'Seating',
          featureCopy: 'With front seat heating, lumbar support, plush perforated adjustable leather seats you will ride in comfort with every drive.',
        },{
          featureImagePath : this.carPath+'lexus-ct/warranty.jpg',
          featureHeading: 'Warranty',
          featureCopy: 'Refer to your Lexus Dealership.',
        }
      ]
    }
  ]; // END - car array

}
