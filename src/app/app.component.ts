import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-BTCO';
  showNavbar = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if the current route contains "dashboard"
      if (this.activatedRoute.snapshot?.firstChild?.routeConfig?.path?.includes('dashboard')) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    });
  }
}
