import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LanguageService } from '../../language.service';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  currentLanguage: string = "";

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    })
  }
}
