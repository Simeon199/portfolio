import { Component, HostListener } from '@angular/core';
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
  isSmallScreen: boolean = window.innerWidth < 500;

  constructor(private languageService: LanguageService, public router: Router) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    })
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 500;
  }

  getDynamicStyles() {
    if (this.isLegalNoticePage()) {
      return { 'position': 'absolute', 'bottom': '0', 'right': '0', 'left': '0', 'max-width': '1440px', 'margin': '0 auto' }
    } else if (this.isPrivacyPolicyPage()) {
      return { 'position': 'relative', 'height': '340px' }
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
      return { 'position': 'absolute', 'bottom': '60px', 'width': this.isSmallScreen ? '90%' : '96%' };
    } else {
      return null;
    }
  }
}