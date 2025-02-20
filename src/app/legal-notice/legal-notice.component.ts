import { Component } from '@angular/core';
import { HeaderComponent } from '../main-content/header/header.component';
import { FooterComponent } from '../main-content/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
