import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../language.service';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  formSubmitted = false;
  http = inject(HttpClient);


  @Input() emailPlaceHolder: string = 'youremail@email.com';
  @Input() namePlaceHolder: string = 'Geben Sie Ihren Namen hier an';
  @Input() messagePlaceHolder: string = 'Hallo Simon, Ich bin interessiert an...';

  contactData = {
    name: "",
    email: "",
    message: "",
    submitted: false,
    agreedToPrivacy: false
  }

  currentLanguage: string = "de";

  constructor(private languageService: LanguageService, private translate: TranslateService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    })
  }

  loadTranslations() {
    this.translate.get('contactFormular.firstInputPlaceholder').subscribe((firstInputPlaceholder) => {
      this.namePlaceHolder = firstInputPlaceholder;
    });
    this.translate.get('contactFormular.secondInputPlaceholder').subscribe((secondInputPlaceholder) => {
      this.emailPlaceHolder = secondInputPlaceholder;
    });
    this.translate.get('contactFormular.thirdInputPlaceholder').subscribe((thirdInputPlaceholder) => {
      this.messagePlaceHolder = thirdInputPlaceholder;
    })
  }

  mailTest = true;
  post = {
    endPoint: 'https://simon-kiesner.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.invalid) {
      Object.values(ngForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    if (!this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('response: ', response);
            ngForm.resetForm();
            this.formSubmitted = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      ngForm.resetForm();
      this.formSubmitted = false;
    }
  }
}