import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isOverlayActive = new BehaviorSubject<boolean>(false);
  private isGermanButtonActiveSource = new BehaviorSubject<boolean>(false);
  public shouldLanguageSelectionBeShown = new BehaviorSubject<boolean>(true);

  isGermanButtonActive$ = this.isGermanButtonActiveSource.asObservable();
  isOverlayActive$ = this.isOverlayActive.asObservable();
  shouldLanguageSelectionBeShown$ = this.shouldLanguageSelectionBeShown.asObservable();

  isOnHomePage: boolean = true;
  allRoutesExceptLandingPage = ['/privacy-policy', '/legal-notice'];
  onlyPrivacyPolicyRoute = ['/privacy-policy'];

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

  constructor() { }
}