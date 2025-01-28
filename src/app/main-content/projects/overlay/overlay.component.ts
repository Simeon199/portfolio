import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { technologyData } from '../projects.model';
// import { allProjectsListed } from '../projects.data';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {


  currentProjectOpenedIndex = null;

  @Input() allProjectsListed: any;
  @Input() currentProjectOpened: string = '';
  @Input() index: string = '0';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: any;
  @Input() imageSrc: string = '';
  @Input() technologyData!: technologyData;
  // @Input() technologyData: technologyData = {
  //   join: {
  //     title: 'Join',
  //     projectImageSource: '../../../../assets/img/join_image.png',
  //     description: 'What is this project about? Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
  //     technologyList: ['HTML', 'CSS', 'JavaScript'],
  //     technologyImageIcons: [
  //       '../../../../assets/img/html-technology.svg',
  //       '../../../../assets/img/css-technology.svg',
  //       '../../../../assets/img/javascript-technology.svg'
  //     ],
  //     projectIndex: 0,
  //     projectIndexAsString: '01'
  //   },
  //   elPolloLoco: {
  //     title: 'El Pollo Loco',
  //     projectImageSource: '../../../../assets/img/pollo_loco.png',
  //     description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
  //     technologyList: ['HTML', 'CSS', 'JavaScript'],
  //     technologyImageIcons: [
  //       '../../../../assets/img/html-technology.svg',
  //       '../../../../assets/img/css-technology.svg',
  //       '../../../../assets/img/javascript-technology.svg'
  //     ],
  //     projectIndex: 1,
  //     projectIndexAsString: '02'
  //   },
  //   daBubble: {
  //     title: 'DABubble',
  //     projectImageSource: '../../../../assets/img/da-bubble.png',
  //     description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization',
  //     technologyList: ['Angular', 'TypeScript', 'Firebase', 'SCSS', 'HTML'],
  //     technologyImageIcons: [
  //       '../../../../assets/img/angular-technology.svg',
  //       '../../../../assets/img/typescript-technology.svg',
  //       '../../../../assets/img/firebase-technology.svg',
  //       '../../../../assets/img/css-technology.svg',
  //       '../../../../assets/img/html-technology.svg'
  //     ],
  //     projectIndex: 2,
  //     projectIndexAsString: '03'
  //   }
  // }
  @Output() close = new EventEmitter<void>();
  @Output() updateParentVariables = new EventEmitter<{
    currentProjectOpened: string;
    currentProjectOpenedDescription: string;
    currentProjectOpenedImageSrc: string;
    currentProjectOpenedTechnologies: string[];
    currentHoveredProjectIndex: string;
  }>();
  // @Output() technologyData = new EventEmitter<{technologyData}>()

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
    for (let key in this.technologyData) {
      let convertedKey = this.projectNameConverter(key);
      if (convertedKey == title) {
        this.currentIndex = this.keyValues.indexOf(key);
        if (this.nextIndex < 2) {
          this.nextIndex = this.currentIndex + 1;
        } else {
          this.nextIndex = 0;
        }
      }
    }
    console.log(this.projectValues[this.nextIndex].projectIndexAsString);
    this.updateVariablesInParent({
      currentProjectOpened: this.projectValues[this.nextIndex].title,
      currentProjectOpenedDescription: this.projectValues[this.nextIndex].description,
      currentProjectOpenedImageSrc: this.projectValues[this.nextIndex].projectImageSource,
      currentProjectOpenedTechnologies: this.projectValues[this.nextIndex].technologies,
      currentHoveredProjectIndex: this.projectValues[this.nextIndex].projectIndexAsString
    });
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      console.log('title updated:', changes['title'].currentValue);
      this.cdr.detectChanges();
    }
  }
}