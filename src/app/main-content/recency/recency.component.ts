import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleRecencyComponent } from './single-recency/single-recency.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recency',
  standalone: true,
  imports: [
    SingleRecencyComponent,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './recency.component.html',
  styleUrl: './recency.component.scss'
})
export class RecencyComponent {
  currentIndex = 0;
  animationDuration = 500;
  isAnimating = false;
  currentTranslateX = 0;
  commentWidth = 636;
  transitionEnabled = true;
  recencies: any = '';

  currentLanguage: string = 'de';
  isLeftArrowHovered: boolean = false;
  isRightArrowHovered: boolean = false;

  constructor(private translate: TranslateService) {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    })
  }

  setHoverStatus(booleanValue: boolean, correctArrow: string) {
    if (correctArrow == 'rightArrow') {
      this.isRightArrowHovered = booleanValue;
    } else if (correctArrow == 'leftArrow') {
      this.isLeftArrowHovered = booleanValue;
    }
  }

  loadTranslations() {
    this.translate.get('recencies').subscribe((translatedRecencies) => {
      this.recencies = Object.values(translatedRecencies).slice(1);
    });
  }

  getKeys(): string[] {
    return Object.keys(this.recencies);
  }

  getValues(): string[] {
    return Object.values(this.recencies);
  }


  navigateFunction(direction: string) {
    console.log('all recencies: ', this.getValues());
    this.initializeVariables();
    this.currentTranslateX += this.determineCorrectShiftAmount(direction);
    setTimeout(() => {
      this.transitionEnabled = false;
      if (direction == 'right') {

        // shift: Entfernt das erste Element eines Arrays und verschiebt alle verbleibenden Elemente nach vorne. Gibt das entfernte Element zurück.

        let firstItem = this.getValues().shift();
        if (firstItem) {
          this.getValues().push(firstItem);
        }
        this.currentIndex = (this.currentIndex + 1) % this.getValues().length;
      } else {

        // pop: Entfernt das letzte Element eines Arrays und gibt das entfernte Element zurück.

        let lastItem = this.getValues().pop();
        if (lastItem) {

          // Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück. 

          this.getValues().unshift(lastItem);
        }
        this.currentIndex = (this.currentIndex - 1 + this.getValues().length) % this.getValues().length;
      }
      this.setVariablesBackToOriginalValues();
    }, this.animationDuration);
  }

  determineCorrectShiftAmount(direction: string) {
    let shiftAmount = 0;
    if (direction == 'right') {
      return shiftAmount = -this.commentWidth;
    } else {
      return shiftAmount = this.commentWidth;
    }
  }

  setVariablesBackToOriginalValues() {
    this.currentTranslateX = 0;
    setTimeout(() => {
      this.transitionEnabled = true;
      this.isAnimating = false;
    }, 50);
  }

  initializeVariables() {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;
    this.transitionEnabled = true;
  }

  permuteRecencyArrayDependingOnMovingDirection(direction: string) {
    this.transitionEnabled = false;
    if (direction === 'right') {
      let firstItem = this.getValues().shift();
      if (firstItem) {
        this.getValues().push(firstItem);
      }
    } else {
      let lastItem = this.getValues().pop();
      if (lastItem) {
        this.getValues().unshift(lastItem);
      }
    }
  }
}