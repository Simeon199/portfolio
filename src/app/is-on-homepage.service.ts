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
    return event instanceof NavigationEnd && event.url === '/';
  }
}
