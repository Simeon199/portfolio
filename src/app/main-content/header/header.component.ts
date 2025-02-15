import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedService } from '../../shared.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isGermanButtonActive: boolean = false;
  currentLanguage: string = 'de';
  isDropdownMenuActivated: boolean = false;

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'de' ? 'en' : 'de';
    this.languageService.setLanguage(newLang);
  }

  // Dem Konstruktor wurde ursprünglich das folgende Argument übergeben: private sharedService: SharedService

  checkActiveButtonStyle(language: string) {
    const newLang = language === 'german' ? 'de' : 'en';
    this.languageService.setLanguage(newLang);
    if (language == 'german') {
      this.isGermanButtonActive = true;
    } else if (language == 'english') {
      this.isGermanButtonActive = false;
    }
    // this.sharedService.setGermanButtonActive(this.isGermanButtonActive);
    // this.languageService.setGermanButtonActive(this.isGermanButtonActive);
  }

  showOrHideDropdown() {
    if (window.innerWidth <= 1350) {
      if (this.isDropdownMenuActivated == false) {
        this.isDropdownMenuActivated = true;
      } else if (this.isDropdownMenuActivated == true) {
        this.isDropdownMenuActivated = false;
      }
    }
  }

  stopEventPropagation(event: Event) {
    event.stopPropagation();
  }
}