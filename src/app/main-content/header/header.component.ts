import { Component } from '@angular/core';
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
export class HeaderComponent {

  isGermanButtonActive: boolean = true;
  isDropdownMenuActivated: boolean = false;

  isBigOverlayHeaderActivated: boolean = false;
  currentLanguage: string = 'de';

  constructor(private languageService: LanguageService, public router: Router, public sharedService: SharedService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
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
    } else if (language == 'english') {
      this.isGermanButtonActive = false;
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
}