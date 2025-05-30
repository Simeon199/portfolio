import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../../shared.service';
import { IsOnHomepageService } from '../../is-on-homepage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isLanguageSelectionEnabled: boolean = true;
  isGermanButtonActive: boolean = false; 
  isDropdownMenuActivated: boolean = false;
  isMyLogoBeingHovered: boolean = false;
  isBigOverlayHeaderActivated: boolean = false;
  currentLanguage: string = 'de';

  constructor(
    private languageService: LanguageService,
    public router: Router,
    public sharedService: SharedService,
    public isOnHomePageService: IsOnHomepageService,
    private viewportScroller: ViewportScroller
  ) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnInit(): void {
    this.isOnHomePageService.currentRoute$.subscribe(() => {
      this.isLanguageSelectionEnabled = this.isOnHomePageService.isOnHomePageOrLegalNotice();
    })
  }

  scrollToFragment(fragment: string) {
    this.router.navigate(['/'], { fragment }).then(() => {
      this.viewportScroller.scrollToAnchor(fragment);
    })
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'de' ? 'en' : 'de'; 
    this.languageService.setLanguage(newLang);
  }

  checkActiveButtonStyle(language: string) {
    const newLang = language === 'german' ? 'de' : 'en';
    this.languageService.setLanguage(newLang);
    if (language == 'german') {
      this.isGermanButtonActive = true;
      this.sharedService.setGermanButtonActive(true);
    } else if (language == 'english') {
      this.isGermanButtonActive = false;
      this.sharedService.setGermanButtonActive(false);
    }
  }

  showDropdown() {
    if (window.innerWidth <= 1350) {
      if (!this.isDropdownMenuActivated) {
        this.isDropdownMenuActivated = true;
      }
    }
  }

  hideDropdown() {
    if (window.innerWidth <= 1350) {
      if (this.isDropdownMenuActivated) {
        this.isDropdownMenuActivated = false;
      }
    }
  }

  setBigOverlayHeaderBoolean() {
    this.isBigOverlayHeaderActivated = !this.isBigOverlayHeaderActivated;
    if (this.isBigOverlayHeaderActivated == true) {
      this.sharedService.openOverlay();
    } else if (this.isBigOverlayHeaderActivated == false) {
      this.sharedService.closeOverlay();
    }
  }

  stopEventPropagation(event: Event) {
    event.stopPropagation();
  }

  isLocationPrivacyPolicy() {
    return this.sharedService.onlyPrivacyPolicyRoute.includes(this.router.url);
  }

  proveRouteAndCloseOverlay() {
    this.deactivateOverlayAndHideDropdown();
  }

  deactivateOverlayAndHideDropdown() {
    if (!this.sharedService.isOnHomePage) {
      this.sharedService.closeOverlay();
      this.hideDropdown();
    }
  }
}