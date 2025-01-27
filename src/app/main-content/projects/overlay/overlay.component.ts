import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { technologyData } from '../projects.model';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent implements OnChanges {

  currentProjectOpenedIndex = null;

  @Output() close = new EventEmitter<void>();
  @Input() currentProjectOpened: string = '';
  @Input() index: string = '0';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: any;
  @Input() imageSrc: string = '';
  @Input() technologyData: technologyData = {
    join: {
      title: 'Join',
      technologyList: ['HTML', 'CSS', 'JavaScript'],
      technologyImageIcons: [
        '../../../../assets/img/html-technology.svg',
        '../../../../assets/img/css-technology.svg',
        '../../../../assets/img/javascript-technology.svg'
      ],
      projectIndex: 0
    },
    elPolloLoco: {
      title: 'El Pollo Loco',
      technologyList: ['HTML', 'CSS', 'JavaScript'],
      technologyImageIcons: [
        '../../../../assets/img/html-technology.svg',
        '../../../../assets/img/css-technology.svg',
        '../../../../assets/img/javascript-technology.svg'
      ],
      projectIndex: 1
    },
    daBubble: {
      title: 'DABubble',
      technologyList: ['Angular', 'TypeScript', 'Firebase', 'SCSS', 'HTML'],
      technologyImageIcons: [
        '../../../../assets/img/angular-technology.svg',
        '../../../../assets/img/typescript-technology.svg',
        '../../../../assets/img/firebase-technology.svg',
        '../../../../assets/img/css-technology.svg',
        '../../../../assets/img/html-technology.svg'
      ],
      projectIndex: 2
    }
  }

  nextIndex: number = 0
  currentIndex: number = 0;
  keyValues = Object.keys(this.technologyData);
  projectValues = Object.values(this.technologyData);

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
    console.log('nextIndex value: ', this.nextIndex);
  }


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      console.log('title updated:', changes['title'].currentValue);
      this.cdr.detectChanges();
    }
  }
}
