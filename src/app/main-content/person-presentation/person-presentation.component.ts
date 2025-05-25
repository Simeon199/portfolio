import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-presentation',
  standalone: true,
  imports: [
    ButtonStyleComponent,
    TranslateModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './person-presentation.component.html',
  styleUrl: './person-presentation.component.scss'
})

export class PersonPresentationComponent {

  @ViewChild('marquee', {static: false}) marqueeRef!: ElementRef<HTMLDivElement>;

  isGithubIconHovered: boolean = false;
  isMailIconHovered: boolean = false;
  isLinkedinIconHovered: boolean = false;
  triggerSecondBreakpoint: boolean = window.innerWidth < 1200 || window.innerHeight < 700;
  currentLanguage: string = "de";

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngAfterViewInit():void{
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
      if(this.marqueeRef?.nativeElement){
        this.marqueeRef.nativeElement.classList.add('is-ready');
      }
    });
  });
}

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.triggerSecondBreakpoint = window.innerWidth < 1200 || window.innerHeight < 700;
  }

  toggleHover(state: boolean, icon: string) {
    if (icon == 'mail') {
      this.isMailIconHovered = state;
    } else if (icon == 'github') {
      this.isGithubIconHovered = state;
    } else if (icon == 'linkedin') {
      this.isLinkedinIconHovered = state;
    }
  }
}