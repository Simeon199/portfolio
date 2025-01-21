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

  navigate(direction: string) {
    const totalItems = this.getKeys().length;
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1) % totalItems;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % totalItems;
    }
    this.currentTranslateX = -this.currentIndex * this.commentWidth;
  }

  // navigate(direction: string) {
  //   if (direction == 'left' && this.currentIndex >= 0) {
  //     this.currentIndex--;
  //   } else if (direction == 'left' && this.currentIndex == 0) {
  //     this.currentIndex = this.getKeys().length - 1;
  //   } else if (direction == 'right' && this.currentIndex < this.getKeys().length - 1) {
  //     this.currentIndex++;
  //   }
  //   this.currentTranslateX = -this.currentIndex * this.commentWidth;
  // }
}
