import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsOnHomepageService {
  private lastKnownUrl: string = '/';
  public currentRoute = toSignal(this.router.events, { initialValue: new NavigationEnd(0, '/', '/') });

  constructor(private router: Router) { }

  isOnHomePageOrLegalNotice(): boolean {
    const event = this.currentRoute();
    if (event instanceof NavigationEnd) {
      const cleanUrl = event.urlAfterRedirects.split('#')[0];
      console.log('clean url value: ', cleanUrl);
      return cleanUrl === '/' || cleanUrl === '/legal-notice';
    }
    return this.lastKnownUrl === '/' || this.lastKnownUrl === '/legal-notice';
  }

  toggleLanguageSelectionDisplay() {
    // debugger;
    console.log('is on homepage or legal notice page: ', this.isOnHomePageOrLegalNotice());
  }
}
