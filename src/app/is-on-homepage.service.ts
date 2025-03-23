import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsOnHomepageService {
  private currentRouteSubject = new BehaviorSubject<string>('/');
  currentRoute$ = this.currentRouteSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      let cleanUrl = event.urlAfterRedirects.split('#')[0];
      this.currentRouteSubject.next(cleanUrl);
    });
  }

  isOnHomePageOrLegalNotice(): boolean {
    let currentUrl = this.currentRouteSubject.value;
    return currentUrl === '/' || currentUrl === '/legal-notice';
  }

  toggleLanguageSelectionDisplay() {
    return this.isOnHomePageOrLegalNotice();
  }
}
