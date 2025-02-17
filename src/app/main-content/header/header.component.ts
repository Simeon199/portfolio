import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isGermanButtonActive: boolean = true;
  isDropdownMenuActivated: boolean = false;
  currentLanguage: string = 'de';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
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