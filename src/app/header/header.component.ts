import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  activeRoute: string;
  triggeredRoute: string;
  hasMenu: boolean;
  hasBack: boolean;
  hasClose: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.handleRouteOperations();
  }
  
  // Performable actions per page
  menu() {
    this.router.navigateByUrl('/lexus-to-you');
  }
  back() {
    if(this.activeRoute == '/select-location')
      this.router.navigateByUrl('/select-car');
    if(this.activeRoute == '/select-date-and-time')
      this.router.navigateByUrl('/select-location');
    if(this.activeRoute == '/enter-your-details')
      this.router.navigateByUrl('/select-date-and-time');
  }
  close() {
      this.router.navigateByUrl(this.triggeredRoute);
  }
  
  // Check for header item options per page
  updateHasMenu() {
    if (this.activeRoute == '/lexus-is-features' || this.activeRoute == '/lexus-gs-features' || this.activeRoute == '/lexus-nx-features'
        || this.activeRoute == '/lexus-rx-features' || this.activeRoute == '/lexus-lx-features' || this.activeRoute == '/lexus-ct-features'
        || this.activeRoute == '/lexus-to-you') {
      this.hasMenu = false;
    } else {
      this.hasMenu = true;
    }
  }
  updateHasBack() {
    if (this.activeRoute == '/select-location' || this.activeRoute == '/select-date-and-time' || this.activeRoute == '/enter-your-details') {
      this.hasBack = true;
    } else {
      this.hasBack = false;
    }
  }
  updateHasClose() {
    if (this.activeRoute == '/lexus-is-features' || this.activeRoute == '/lexus-gs-features' || this.activeRoute == '/lexus-nx-features'
        || this.activeRoute == '/lexus-rx-features' || this.activeRoute == '/lexus-lx-features' || this.activeRoute == '/lexus-ct-features'
        || this.activeRoute == '/lexus-to-you') {
      this.hasClose = true;
    } else {
      this.hasClose = false;
    }
  }
  
  /**
   * NavigationStart - used to go back to correct route
   * NavigationEnd - used to update header options based on active route
   */
  handleRouteOperations() {
    this.router.events
      .pipe(filter((event => event instanceof NavigationStart)
        ))
      .subscribe((event:NavigationStart) => {
        this.triggeredRoute = this.router.url;
      }
    );
    this.router.events
      .pipe(filter((event => event instanceof NavigationEnd)
        ))
      .subscribe((event:NavigationEnd) => {
        this.activeRoute = this.router.url;
        this.updateHasMenu();
        this.updateHasBack();
        this.updateHasClose();
      }
    );
  }

}
