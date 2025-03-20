import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../../shared.service';

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

  isOnHomePage: boolean = true;
  isGermanButtonActive: boolean = true;
  isDropdownMenuActivated: boolean = false;
  isMyLogoBeingHovered: boolean = false;
  isBigOverlayHeaderActivated: boolean = false;
  currentLanguage: string = 'de';

  allRoutesExceptLandingPage = ['/privacy-policy', '/legal-notice'];

  constructor(private languageService: LanguageService, public router: Router, public sharedService: SharedService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngOnInit(): void {
    this.isOnHomePage = !this.allRoutesExceptLandingPage.includes(this.router.url);
  }

  isHiddenRoute() {
    const hiddenRoutes = ['/privacy-policy'];
    return hiddenRoutes.includes(this.router.url);
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

  proveRouteAndCloseOverlay() {
    if (this.allRoutesExceptLandingPage.includes(this.router.url)) {
      this.isOnHomePage = !this.allRoutesExceptLandingPage.includes(this.router.url);
      this.sharedService.closeOverlay();
      this.hideDropdown();
    }
  }
}