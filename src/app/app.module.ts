/* MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';

/* CONFIGS */
import { routerConfig } from './router.config';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectCarComponent } from './select-car/select-car.component';  
  import { LexusIsFeaturesComponent } from './lexus-is-features/lexus-is-features.component';
  import { LexusEsFeaturesComponent } from './lexus-es-features/lexus-es-features.component';
  import { LexusGsFeaturesComponent } from './lexus-gs-features/lexus-gs-features.component';
  import { LexusNxFeaturesComponent } from './lexus-nx-features/lexus-nx-features.component';
  import { LexusRxFeaturesComponent } from './lexus-rx-features/lexus-rx-features.component';
  import { LexusCtFeaturesComponent } from './lexus-ct-features/lexus-ct-features.component';
  import { LexusLxFeaturesComponent } from './lexus-lx-features/lexus-lx-features.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { SelectDateAndTimeComponent } from './select-date-and-time/select-date-and-time.component';
import { EnterYourDetailsComponent } from './enter-your-details/enter-your-details.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

/* SERVICES */
import { CarService } from './shared/model/car.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectCarComponent,
      LexusIsFeaturesComponent,
      LexusEsFeaturesComponent,
      LexusGsFeaturesComponent,
      LexusNxFeaturesComponent,
      LexusRxFeaturesComponent,
      LexusCtFeaturesComponent,
      LexusLxFeaturesComponent,
    SelectLocationComponent,
    SelectDateAndTimeComponent,
    EnterYourDetailsComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [SimpleGlobal, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
