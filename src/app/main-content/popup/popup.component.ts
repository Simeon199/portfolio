// import { SafeCall } from '@angular/compiler';
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

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
    }
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  }
  // visible = false;

  // ngOnInit():void{
  //   document.body.classList.add('no-scroll');
  //   const hasVisited = localStorage.getItem('hasVisited');
  //   if(!hasVisited){
  //     this.visible = true;
  //   }
  // }

  ngAfterViewInit(): void {
    if(this.visible){
      setTimeout(() => {
        this.animatePopup();
      }, 0);
    }
  }

  ngOnDestroy(): void{
    document.body.classList.remove('no-scroll');
  }

  private animatePopup(){
    if(this.popupContent && this.popupText){
        gsap.from(this.popupContent.nativeElement, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });

      gsap.from(this.popupText.nativeElement, {
        y: 50,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: 'power2.out'
      });

      setTimeout(() => {
        this.visible = false;
        localStorage.setItem('hasVisited', 'true');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
      }, 4000);
    }
  }
}