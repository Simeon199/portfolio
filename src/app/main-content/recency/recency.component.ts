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
  currentTranslateX = 0;
  commentWidth = 632;

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
    let initializeRecencyOne = this.allRecencyValues[0];
    let initializeRecencyTwo = this.allRecencyValues[1];
    let initializeRecencyThree = this.allRecencyValues[2];
    if (direction == 'right') {
      this.allRecencyValues[0] = initializeRecencyThree;
      this.allRecencyValues[1] = initializeRecencyOne;
      this.allRecencyValues[2] = initializeRecencyTwo;
    } else if (direction == 'left') {
      this.allRecencyValues[0] = initializeRecencyTwo;
      this.allRecencyValues[1] = initializeRecencyThree;
      this.allRecencyValues[2] = initializeRecencyOne;
    }
    console.log('permuted allItemValues-Array: ', this.allRecencyValues);
  }

  navigate(direction: string) {
    const totalItems = this.getKeys().length;
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1) % totalItems;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % totalItems;
    }
    this.currentTranslateX = -this.currentIndex * this.commentWidth;
  }
}
