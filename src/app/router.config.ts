import { Route } from "@angular/router";
import { SelectCarComponent } from "./select-car/select-car.component";
  import { LexusIsFeaturesComponent } from "./lexus-is-features/lexus-is-features.component";
  import { LexusGsFeaturesComponent } from "./lexus-gs-features/lexus-gs-features.component";
  import { LexusNxFeaturesComponent } from "./lexus-nx-features/lexus-nx-features.component";
  import { LexusRxFeaturesComponent } from "./lexus-rx-features/lexus-rx-features.component";
  import { LexusLxFeaturesComponent } from "./lexus-lx-features/lexus-lx-features.component";
  import { LexusCtFeaturesComponent } from "./lexus-ct-features/lexus-ct-features.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";
import { SelectLocationComponent } from "./select-location/select-location.component";
import { SelectDateAndTimeComponent } from "./select-date-and-time/select-date-and-time.component";
import { EnterYourDetailsComponent } from "./enter-your-details/enter-your-details.component";

export const routerConfig: Route[] = [
  { path: '', redirectTo: 'select-car', pathMatch: 'full' },
  { path: 'select-car', component: SelectCarComponent },
    { path: 'lexus-is-features', component: LexusIsFeaturesComponent },
    { path: 'lexus-gs-features', component: LexusGsFeaturesComponent },
    { path: 'lexus-nx-features', component: LexusNxFeaturesComponent },
    { path: 'lexus-rx-features', component: LexusRxFeaturesComponent },
    { path: 'lexus-lx-features', component: LexusLxFeaturesComponent },
    { path: 'lexus-ct-features', component: LexusCtFeaturesComponent },
  { path: 'select-location', component: SelectLocationComponent },
  { path: 'select-date-and-time', component: SelectDateAndTimeComponent },
  { path: 'enter-your-details', component: EnterYourDetailsComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', redirectTo: 'select-car' }
]