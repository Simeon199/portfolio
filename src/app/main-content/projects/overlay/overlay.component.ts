import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { technologyData } from '../projects.model';
// import { ProjectsComponent } from '../projects.component';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() currentProjectOpened: string = '';
  @Input() index: string = '0';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: any; // Hier müsste eine komplexere Datenstruktur reinkommen --> Nur vorübergehend any-type !!!
  @Input() imageSrc: string = '';
  @Input() technologyData: technologyData = {
    join: {
      technologyList: ['HTML', 'CSS', 'JavaScript'],
      technologyImageIcons: [
        '../../../../assets/img/html-technology.svg',
        '../../../../assets/img/css-technology.svg',
        '../../../../assets/img/javascript-technology.svg'
      ]
    },
    elPolloLoco: {
      technologyList: ['HTML', 'CSS', 'JavaScript'],
      technologyImageIcons: [
        '../../../../assets/img/html-technology.svg',
        '../../../../assets/img/css-technology.svg',
        '../../../../assets/img/javascript-technology.svg'
      ]
    },
    daBubble: {
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

  ngOnInit() {
    console.log('current project opened in der Kindkomponente: ', this.currentProjectOpened);
  }
}
