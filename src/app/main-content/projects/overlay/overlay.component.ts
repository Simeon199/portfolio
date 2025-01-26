// import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { technologyData } from '../projects.model';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent implements OnChanges {
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
      ]
    },
    elPolloLoco: {
      title: 'El Pollo Loco',
      technologyList: ['HTML', 'CSS', 'JavaScript'],
      technologyImageIcons: [
        '../../../../assets/img/html-technology.svg',
        '../../../../assets/img/css-technology.svg',
        '../../../../assets/img/javascript-technology.svg'
      ]
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
      ]
    }
  }


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      console.log('title updated:', changes['title'].currentValue);
      this.cdr.detectChanges();
    }
  }
}
