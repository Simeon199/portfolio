import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-person-description',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, TranslateModule],
  templateUrl: './person-description.component.html',
  styleUrl: './person-description.component.scss'
})

export class PersonDescriptionComponent {
  currentLanguage: string = 'de';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  setRespectiveLanguage(state: boolean) {
    if (state == true) {
      this.currentLanguage = 'de';
    } else if (state == false) {
      this.currentLanguage = 'en';
    }
  }
}
