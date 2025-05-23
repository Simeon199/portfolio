import { Component, HostListener } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

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

  isGithubIconHovered: boolean = false;
  isMailIconHovered: boolean = false;
  isLinkedinIconHovered: boolean = false;
  triggerSecondBreakpoint: boolean = window.innerWidth < 1200;
  currentLanguage: string = "de";

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  ngAfterViewInit(){
    const track = document.querySelector('.marquee-track');
    const width = track!.scrollWidth / 2;

    gsap.to(track, {
      x: `-=${width / 2}`,
      duration: 10,
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % width) // nahtloses Looping
      }
    });
  }

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.triggerSecondBreakpoint = window.innerWidth < 1200;
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