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
    // console.log('is on homepage or legal notice site:', this.isOnHomePageService.isOnHomePageOrLegalNotice())
    return this.isOnHomePageService.isOnHomePageOrLegalNotice();
  }

  // toggleLanguageSelectionPermission() {
  //   this.isOnHomePage = !this.isOnHomePage;
  //   console.log('is on homepage: ', this.isOnHomePage);
  // }

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