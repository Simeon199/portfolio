import { Component } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-presentation',
  standalone: true,
  imports: [
    ButtonStyleComponent,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './person-presentation.component.html',
  styleUrl: './person-presentation.component.scss'
})

export class PersonPresentationComponent {

  isGithubIconHovered: boolean = false;
  isMailIconHovered: boolean = false;
  isLinkedinIconHovered: boolean = false;

  isHovered: boolean = false;
  currentLanguage: string = "de";

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleHover(state: boolean, icon: string) {
    // debugger;
    if (icon == 'mail') {
      this.isMailIconHovered = state;
    } else if (icon == 'github') {
      this.isGithubIconHovered = state;
    } else if (icon == 'linkedin') {
      this.isLinkedinIconHovered = state;
    }
    // this.isHovered = state;
  }
}