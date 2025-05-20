import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements AfterViewInit{

  @ViewChild('popupContent') popupContent!: ElementRef;
  @ViewChild('popupText') popupText!: ElementRef;

  visible = false;

  constructor(){
    const hasVisited = localStorage.getItem('hasVisited');
    if(hasVisited){
      this.visible = true;
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    }
  }

  ngAfterViewInit(): void {
    if(this.visible){
      setTimeout(() => {
        this.animatePopupWithTimeline();
      }, 0);
    }
  }

  ngOnDestroy(): void{
    document.body.classList.remove('no-scroll');
  }

  private animatePopupWithTimeline(){
    const tl = gsap.timeline();

    // Einstieg: Pop-Up Container skalieren

    tl.from(this.popupContent.nativeElement, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });

    // Typewriter Effekt

    tl.to(this.popupText.nativeElement, {
      text: 'Welcome to my Portfolio...',
      duration: 4,
      ease: 'none',
      delay: 0.2
    });

    // Kleine Pause nach dem Typing

    tl.to({}, {duration: 1}); 

    // Ausblenden

    tl.to(this.popupContent.nativeElement, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: 'power1.inOut'
    });

    // Nach Ende: Aufräumen

    tl.call(() => {
      this.visible = false;
      localStorage.setItem('hasVisitied', 'true');
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    });
  }
}