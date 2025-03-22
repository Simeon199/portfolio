import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsOnHomepageService {
  public currentRoute = toSignal(this.router.events, { initialValue: new NavigationEnd(0, '/', '/') });

  constructor(private router: Router) { }

  isOnHomePage(): boolean {
    const event = this.currentRoute();
    if (event instanceof NavigationEnd) {
      const cleanUrl = event.urlAfterRedirects.split('#')[0];
      return event instanceof NavigationEnd && cleanUrl === '/';
    }
    return false; // Dieses Statement ist aktuell das Problem, weil false immer getriggert wird, wenn event keine Instanz von NavigationEnd ist !!!
  }
}
