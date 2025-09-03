import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../language.service';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {

  formSubmitted = false;
  isCheckboxImgHovered = false;
  isCheckboxTouched = false;
  isCheckboxTouchedFirstTime = true;
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
  legalNoticeMessage: any;

  constructor(private languageService: LanguageService,
    private translate: TranslateService, private snackBar: MatSnackBar) {
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

  getCheckboxImageSrc() {
    if (this.contactData.agreedToPrivacy) {
      return this.isCheckboxImgHovered ? '../../../../assets/img/checkbox_checked_hovered.svg' : '../../../../assets/img/checkbox_checked.svg';
    } else {
      return this.isCheckboxImgHovered ? '../../../../assets/img/checkbox_unchecked_hovered.svg' : '../../../../assets/img/checkbox_unchecked.svg';
    }
  }

  toggleCheckbox() {
    this.isCheckboxTouched = true;
    this.isCheckboxTouchedFirstTime = false;
    this.contactData.agreedToPrivacy = !this.contactData.agreedToPrivacy
  }

  toggleCheckboxImgHovered() {
    this.isCheckboxImgHovered = !this.isCheckboxImgHovered;
  }

  mailTest = false;

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
    if (this.isCheckboxTouchedFirstTime == false) {
      this.isCheckboxTouchedFirstTime = true;
    }

    if (ngForm.invalid) {
      Object.values(ngForm.controls).forEach(control => control.markAsTouched());
      return;
    }

    if (!this.mailTest) {
      this.sendMail(ngForm);
    } else {
      this.resetForm(ngForm);
    }
  }

  private sendMail(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => this.handleSuccess(ngForm),
        error: (error) => this.handleError(error)
      });
  }

  private handleSuccess(ngForm: NgForm) {
    if(this.currentLanguage === 'de'){
      this.showSnackbar("Nachricht erfolgreich gesendet!", ['custom-snackbar']);
    } else if(this.currentLanguage === 'en') {
      this.showSnackbar("Message sent successfully!", ['custom-snackbar']);
    }
    this.resetForm(ngForm);
  }

  private handleError(error: any) {
    console.error(error);
    if(this.currentLanguage === 'de'){
      this.showSnackbar("Fehler beim Senden der Nachricht!", ['custom-error']);
    } else if(this.currentLanguage === 'en'){
      this.showSnackbar("Error while sending the message!", ['custom-error']);
    }
  }

  private showSnackbar(message: string, panelClass: string[]) {
    if(this.currentLanguage === 'de'){
      this.showGermanSnackbar(message, panelClass);
    } else if(this.currentLanguage === 'en') {
      this.showEnglishSnackbar(message, panelClass);
    }
  }

  showGermanSnackbar(message: string, panelClass: string[]){
    this.snackBar.open(message, "Schließen", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass
    });
  }

  showEnglishSnackbar(message: string, panelClass: string[]){
    this.snackBar.open(message, "Close", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass
    });
  }

  private resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.formSubmitted = false;
  }
}