import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IsOnHomepageService } from './is-on-homepage.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isOverlayActive = new BehaviorSubject<boolean>(false);
  private isGermanButtonActiveSource = new BehaviorSubject<boolean>(false);

  isOnHomePage: boolean = false;
  isGermanButtonActive$ = this.isGermanButtonActiveSource.asObservable();
  isOverlayActive$ = this.isOverlayActive.asObservable();
  allRoutesExceptLandingPage = ['/privacy-policy', '/legal-notice'];
  onlyPrivacyPolicyRoute = ['/privacy-policy'];

  constructor(public isOnHomePageService: IsOnHomepageService) { }

  isLanguageSelectionEnabled(): boolean {
    return this.isOnHomePageService.isOnHomePageOrLegalNotice();
  }

  manageHideShowOverflow(state: boolean) {
    if (state == true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  openOverlay() {
    this.isOverlayActive.next(true);
    this.manageHideShowOverflow(true);
  }

  closeOverlay() {
    this.isOverlayActive.next(false);
    this.manageHideShowOverflow(false);
  }

  setGermanButtonActive(state: boolean) {
    this.isGermanButtonActiveSource.next(state);
  }
}