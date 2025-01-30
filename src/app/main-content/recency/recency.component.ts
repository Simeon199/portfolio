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
  animationDuration = 500;
  isAnimating = false;
  currentTranslateX = 0;
  commentWidth = 636;
  transitionEnabled = true;
  recencies: recencies = {
    recency1: 'I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool and focused, and made sure our team was set up for success. He is super knowledgeable, easy to work with, an I would happily work with him again given the chance',
    recency2: 'Our project benefited enormously from Lukas efficient way of working.',
    recency3: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of out project.'
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
