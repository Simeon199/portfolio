import { Component } from '@angular/core';
import { HeaderComponent } from '../main-content/header/header.component';
import { FooterComponent } from '../main-content/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
