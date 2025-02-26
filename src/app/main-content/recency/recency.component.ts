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
  commentWidth = 720;
  transitionEnabled = true;
  recencies: any = '';
  recencyValues: any = '';
  recencyKeys: any = '';

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
    this.recencyKeys = Object.keys(this.recencies);
    return Object.keys(this.recencies);
  }

  getValues(): string[] {
    this.recencyValues = Object.keys(this.recencies);
    return Object.values(this.recencies);
  }

  navigateFunction(direction: string) {
    this.initializeVariables();
    this.currentTranslateX += this.determineCorrectShiftAmount(direction);
    setTimeout(() => {
      this.transitionEnabled = false;
      this.changeOrderOfRecencyArray(direction);
      this.setVariablesBackToOriginalValues();
    }, this.animationDuration);
  }

  changeOrderOfRecencyArray(direction: string) {
    if (this.isMovingDirectionRight(direction)) {
      this.shiftFirstRecencyToEndOfRecenciesArray();
    } else {
      this.shiftLastRecencyToBeginningofRecenciesArray();
    }
  }

  isMovingDirectionRight(direction: string) {
    return direction == 'right';
  }

  shiftFirstRecencyToEndOfRecenciesArray() {
    let firstItem = this.recencies.shift();
    if (firstItem) {
      this.recencies.push(firstItem);
    }
    this.currentIndex = (this.currentIndex + 1) % this.getValues().length;
  }

  shiftLastRecencyToBeginningofRecenciesArray() {
    let lastItem = this.recencies.pop();
    if (lastItem) {
      this.recencies.unshift(lastItem);
    }
    this.currentIndex = (this.currentIndex - 1 + this.getValues().length) % this.getValues().length;
  }

  determineCorrectShiftAmount(direction: string) {
    if (this.isMovingDirectionRight(direction)) {
      return this.currentTranslateX = -this.commentWidth;
    } else {
      return this.currentTranslateX = this.commentWidth;
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