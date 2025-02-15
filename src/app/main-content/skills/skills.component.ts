import { Component } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ButtonStyleComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  currentLanguage: string = "de";
  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }
}