import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  http = inject(HttpClient);


  @Input() emailPlaceHolder: string = 'youremail@email.com';
  @Input() namePlaceHolder: string = 'Your name goes here';
  @Input() messagePlaceHolder: string = 'Hello Simon, I am interested in...';

  contactData = {
    name: "",
    email: "",
    message: "",
    submitted: false
  }

  // mailTest = true;

  // post = {
  //   endPoint: 'https://deineDomain.de/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       responseType: 'text',
  //     },
  //   },
  // };

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response) => {

  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

  //     ngForm.resetForm();
  //   }
  // }

  onSubmit(ngForm: NgForm) {
    // this.checkForInvalidEntries();
    // this.contactData.submitted = true;
    // if (ngForm.valid) {
    //   console.log("Form submitted: ", this.contactData);
    // }
    // this.contactData.submitted = false;
    // ngForm.resetForm();
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
      ngForm.resetForm();
    }
  }

  // checkForInvalidEntries() {
  //   if (this.namePlaceHolder == 'Your name goes here') {
  //     this.namePlaceHolder = 'Oops! It seems your name is missing';
  //   } else if (this.emailPlaceHolder == 'youremail@email.com') {
  //     this.emailPlaceHolder = 'Hoppla! Your email is required';
  //   } else if (this.messagePlaceHolder == 'Hello Simon, I am interested in...') {
  //     this.messagePlaceHolder = 'What do you need to develop?'
  //   }
  //   return;
  // }
}
