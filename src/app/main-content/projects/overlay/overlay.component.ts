import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECHNOLOGY_DATA } from '../projects.data';
import { technologyData } from '../projects.model';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() technologyData: technologyData = TECHNOLOGY_DATA;
  @Input() allProjectsListed: any;
  @Input() currentProjectOpened: string = '';
  @Input() index: string = '0';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: any;
  @Input() imageSrc: string = '';
  @Input() gitHubLink: string = '';
  @Input() projectLink: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() updateParentVariables = new EventEmitter<{
    currentProjectOpened: string;
    currentProjectOpenedDescription: string;
    currentProjectOpenedImageSrc: string;
    currentProjectOpenedTechnologies: string[];
    currentHoveredProjectIndex: string;
    currentProjectOpenedGitHubLink: string;
    currentProjectOpenedProjectLink: string;
  }>();

  nextIndex: number = 0
  currentIndex: number = 0;
  keyValues = Object.keys(this.technologyData);
  projectValues = Object.values(this.technologyData);

  updateVariablesInParent(updatedValues: {
    currentProjectOpened: string;
    currentProjectOpenedDescription: string;
    currentProjectOpenedImageSrc: string;
    currentProjectOpenedTechnologies: string[];
    currentHoveredProjectIndex: string;
    currentProjectOpenedGitHubLink: string;
    currentProjectOpenedProjectLink: string;
  }) {
    this.updateParentVariables.emit(updatedValues);
  }

  projectNameConverter(key: string) {
    if (key == 'join') {
      return 'Join';
    } else if (key == 'elPolloLoco') {
      return 'El Pollo Loco';
    } else if (key == 'daBubble') {
      return 'DABubble';
    } else {
      return 'Error';
    }
  }

  closeOverlay() {
    this.close.emit();
  }

  goToNextProject(title: string) {
    this.keyValues.forEach(key => {
      let convertedKey = this.projectNameConverter(key);
      if (convertedKey == title) {
        this.currentIndex = this.keyValues.indexOf(key);
        if (this.currentIndex < 2) {
          this.nextIndex = this.currentIndex + 1;
        } else {
          this.nextIndex = 0;
        }
      }
    })
    this.updateVariablesInParent({
      currentProjectOpened: this.projectValues[this.nextIndex].title,
      currentProjectOpenedDescription: this.projectValues[this.nextIndex].description,
      currentProjectOpenedImageSrc: this.projectValues[this.nextIndex].projectImageSource,
      currentProjectOpenedTechnologies: this.projectValues[this.nextIndex].technologies,
      currentHoveredProjectIndex: this.projectValues[this.nextIndex].projectIndexAsString,
      currentProjectOpenedGitHubLink: this.projectValues[this.nextIndex].gitHubLink,
      currentProjectOpenedProjectLink: this.projectValues[this.nextIndex].projectLink
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}