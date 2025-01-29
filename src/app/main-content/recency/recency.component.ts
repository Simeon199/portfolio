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


  // navigateFunction(direction: string) {
  //   let initializeRecencyOne = this.allRecencyValues[0];
  //   let initializeRecencyTwo = this.allRecencyValues[1];
  //   let initializeRecencyThree = this.allRecencyValues[2];
  //   if (direction == 'right') {
  //     setTimeout(() => {
  //       this.allRecencyValues[0] = initializeRecencyThree;
  //       this.allRecencyValues[1] = initializeRecencyOne;
  //       this.allRecencyValues[2] = initializeRecencyTwo;
  //     }, 500);
  //   } else if (direction == 'left') {
  //     setTimeout(() => {
  //       this.allRecencyValues[0] = initializeRecencyTwo;
  //       this.allRecencyValues[1] = initializeRecencyThree;
  //       this.allRecencyValues[2] = initializeRecencyOne;
  //     }, 500);
  //   }
  // }

  navigateFunction(direction: string) {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;
    const shiftAmount = direction === 'right' ? -this.commentWidth : this.commentWidth
    this.currentTranslateX += shiftAmount;
    setTimeout(() => {
      if (direction === 'right') {
        const firstItem = this.allRecencyValues.shift();
        if (firstItem) {
          this.allRecencyValues.push(firstItem);
        }
      } else {
        const lastItem = this.allRecencyValues.pop();
        if (lastItem) {
          this.allRecencyValues.unshift(lastItem);
        }
      }
      this.currentTranslateX = 0;
      this.isAnimating = false;
    }, this.animationDuration);
  }
}
