import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  currentLanguage: string = '';

  constructor(private languageService: LanguageService, public router: Router) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    })
  }

  // getDynamicStyles() {
  //   const url = this.router.url;
  //   if (this.isLegalOrPrivacyPage()) {
  //     return { 'position': 'absolute', 'bottom': '0', 'right': '0', 'left': '0', 'max-width': '1440px', 'margin': '0 auto' }
  //   } else if (url !== '/' && url !== '/legal-notice' && url !== '/privacy-policy') {
  //     return { 'position': 'relative', 'height': '350px' }
  //   } else {
  //     return { 'position': 'relative' };
  //   }
  // }

  getDynamicStyles() {
    const url = this.router.url;
    if (this.isLegalNoticePage()) {
      return { 'position': 'absolute', 'bottom': '0', 'right': '0', 'left': '0', 'max-width': '1440px', 'margin': '0 auto' }
    } else if (this.isPrivacyPolicyPage()) {
      return { 'position': 'relative', 'height': '350px' }
    } else {
      return { 'position': 'relative' };
    }
  }

  isLegalOrPrivacyPage() {
    return this.isLegalNoticePage() || this.isPrivacyPolicyPage()
  }

  isLegalNoticePage() {
    return this.router.url === '/legal-notice';
  }

  isPrivacyPolicyPage() {
    return this.router.url === '/privacy-policy';
  }

  getFooterWrapperStyle() {
    if (this.isPrivacyPolicyPage()) {
      return { 'position': 'absolute', 'bottom': '60px', 'width': '96%' }
    } else {
      return null;
    }
  }
}
