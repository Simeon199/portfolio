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
    'A. Qarar': 'Ich hatte das Vergnügen, mit Simon an unserem gemeinsamen Projekt zu arbeiten. Er war immer zuverlässig und brachte sich tatkräftig in alle Aufgaben ein. Besonders beeindruckt hat mich, wie schnell er neue Konzepte und Technologien aufgenommen hat. Simon ist ein sehr wertvoller Partner, der stets auf uns zugegangen ist und maßgeblich dazu beitrug, dass wir unser Ziel erfolgreich erreichen konnten.',
    'M. Žalec': 'Simons Mitarbeit bei unserem Join-Gruppenprojekt war sehr erfrischend und bereichernd, da er immer zur Stelle war, wenn es ein Problem gab und auch ausdauernd auf die Lösung hingearbeitet hat. Auch wenn man einmal Unterstützung brauchte, konnte man ihn einfach fragen und er hat sich die Zeit genommen, einem die Fragen zu beantworten.',
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
