import { Component } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-person-presentation',
  standalone: true,
  imports: [ButtonStyleComponent, TranslateModule],
  templateUrl: './person-presentation.component.html',
  styleUrl: './person-presentation.component.scss'
})
export class PersonPresentationComponent {
  currentLanguage: string = "de";
  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }
}
