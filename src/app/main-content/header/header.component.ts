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
  isDropdownMenuActivated: boolean = false;

  checkActiveButtonStyle(activateLanguage: string) {
    if (activateLanguage == 'german') {
      this.isGermanButtonActive = true;
    } else if (activateLanguage == 'english') {
      this.isGermanButtonActive = false;
    }
  }

  showOrHideDropdown() {
    if (window.innerWidth <= 1350) {
      if (this.isDropdownMenuActivated == false) {
        this.isDropdownMenuActivated = true;
      } else if (this.isDropdownMenuActivated == true) {
        this.isDropdownMenuActivated = false;
      }
    }
    console.log('function is triggered');
  }

  stopEventPropagation(event: Event) {
    event.stopPropagation();
  }
}
