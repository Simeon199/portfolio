import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  isMyLogoBeingHovered: boolean = false;
  currentLanguage: string = '';

  constructor(
    private languageService: LanguageService,
    public router: Router,
    public sharedService: SharedService
  ) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }
}