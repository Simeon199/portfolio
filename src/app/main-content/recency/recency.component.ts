import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleRecencyComponent } from './single-recency/single-recency.component';
import { recencies } from './recency.model';

@Component({
  selector: 'app-recency',
  standalone: true,
  imports: [
    SingleRecencyComponent,
    CommonModule
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


  recencies: recencies = {
    recency1: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    recency2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    recency3: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  };

  getKeys(): string[] {
    return Object.keys(this.recencies);
  }

  getValues(): string[] {
    return Object.values(this.recencies);
  }

  allItemValues = this.getKeys();
  allRecencyValues = this.getValues();

  navigateFunction(direction: string) {
    this.initializeVariables();
    this.currentTranslateX += this.determineCorrectShiftAmount(direction);
    setTimeout(() => {
      this.permuteRecencyArrayDependingOnMovingDirection(direction);
      if (direction == 'right') {
        this.currentIndex = (this.currentIndex + 1) % this.allRecencyValues.length;
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.allRecencyValues.length) % this.allRecencyValues.length;
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
      let firstItem = this.allRecencyValues.shift();
      if (firstItem) {
        this.allRecencyValues.push(firstItem);
      }
    } else {
      let lastItem = this.allRecencyValues.pop();
      if (lastItem) {
        this.allRecencyValues.unshift(lastItem);
      }
    }
  }
}
