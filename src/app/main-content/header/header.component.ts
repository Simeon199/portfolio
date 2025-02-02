import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isGermanButtonActive: boolean = false;
  checkActiveButtonStyle(activateLanguage: string) {
    if (activateLanguage == 'german') {
      this.isGermanButtonActive = true;
    } else if (activateLanguage == 'english') {
      this.isGermanButtonActive = false;
    }
  }
}
