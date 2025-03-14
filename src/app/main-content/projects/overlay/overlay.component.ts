import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectsData } from '../projects.data';
import { projectsModel } from '../projects.model';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../../shared.service';


@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() projectsData: projectsModel = projectsData;
  @Input() allProjectsListed: any;
  @Input() currentProjectOpened: string = '';
  @Input() index: string = '';
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

  keyValues = Object.keys(this.projectsData);
  projectValues = Object.values(this.projectsData);
  currentLanguage: string = 'de';
  translateKey: string = '';

  constructor(private translate: TranslateService, public sharedService: SharedService) { }

  ngOnInit() {
    let titleUpdated = this.revertProjectNameConverter(this.title);
    this.translateKey = `allProjectData.${titleUpdated}.description`;
  }

  getTranslationParams() {
    return { description: this.description };
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
  }

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

  revertProjectNameConverter(key: string) {
    if (key == 'Join') {
      return 'join';
    } else if (key == 'El Pollo Loco') {
      return 'elPolloLoco';
    } else if (key == 'DABubble') {
      return 'daBubble';
    } else {
      return 'Error';
    }
  }

  closeOverlay() {
    this.close.emit();
    this.sharedService.manageHideShowOverflow(false);
  }

  goToNextProject(title: string) {
    this.keyValues.forEach(key => {
      let convertedKey = this.projectNameConverter(key);
      if (convertedKey == title) {
        this.currentIndex = this.keyValues.indexOf(key);
        if (this.currentIndex < 1) { // ehemals this.currentIndex < 2
          this.nextIndex = this.currentIndex + 1;
        } else {
          this.nextIndex = 0;
        }
      }
    })
    this.updateAllNecessaryInfoForNextProject();
  }

  updateAllNecessaryInfoForNextProject() {
    this.updateAllVariablesInParentComponent();
    this.updateTitleAndTranslateKey();
  }

  updateAllVariablesInParentComponent() {
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

  updateTitleAndTranslateKey() {
    let titleUpdated = this.revertProjectNameConverter(this.projectValues[this.nextIndex].title);
    this.translateKey = `allProjectData.${titleUpdated}.description`;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}