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

  @ViewChild('popupContainer') popupContainer!: ElementRef;
  @ViewChild('popupContent') popupContent!: ElementRef;
  @ViewChild('popupText') popupText!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('cursor') cursor!: ElementRef;

  visible = false;

  constructor(){
    const hasVisited = sessionStorage.getItem('hasVisited');
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

    // Typewriter Effekt

    tl.to(this.popupText.nativeElement, {
      text: 'Welcome to the Portfolio of Simon Kiesner',
      fontFamily: 'Fira Code',
      duration: 4,
      ease: 'none',
      delay: 0.2
    });

    // Logo ausblenden

    tl.to(this.cursor.nativeElement, { 
      opacity: 0, 
      duration: 0.3 
    });

     // Logo einblenden

    tl.from(this.logo.nativeElement, {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    });

    // Kleine Pause nach dem Typing

    tl.to({}, {duration: 1}); 

    // Ausblenden

    tl.to(this.popupContainer.nativeElement, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6, 
      ease: 'power1.inOut'
    });

    tl.set(this.popupContainer.nativeElement, {
      display: 'none'
    })

    // Nach Ende: Aufräumen

    tl.call(() => {
      this.visible = false;
      sessionStorage.setItem('hasVisited', 'true');
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    });
  }
}