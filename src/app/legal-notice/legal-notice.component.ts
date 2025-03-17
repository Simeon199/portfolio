import { Component } from '@angular/core';
import { LanguageService } from '../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../main-content/header/header.component';
import { FooterComponent } from '../main-content/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  currentLanguage: string = '';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    })
  }
}
