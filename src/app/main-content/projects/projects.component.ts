import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectFadedInComponent } from './single-project-faded-in/single-project-faded-in.component';
import { OverlayComponent } from './overlay/overlay.component';
import { Projects } from './projects.model';
import { ProjectImageSources } from './projects.model';
import { ProjectDescription } from './projects.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SingleProjectComponent,
    SingleProjectFadedInComponent,
    SingleProjectFadedInComponent,
    OverlayComponent,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  isHoveredJoin: boolean = false;
  isHoveredPolloLoco: boolean = false;
  isHoveredDABubble: boolean = false;

  isOverlayVisible = false;

  projects: Projects = {
    join: 'Join',
    elPolloLoco: 'El Pollo Loco',
    daBubble: 'DA Bubble'
  };

  projectImageSources: ProjectImageSources = {
    joinImageSrc: '../../../../assets/img/join_image.png',
    elPolloLocoImageSrc: '../../../../assets/img/pollo_loco.png',
    daBubbleImageSrc: '../../../../assets/img/da-bubble.png'
  };

  projectDescription: ProjectDescription = {
    join: {
      title: 'Join',
      description: 'What is this project about? Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      projectImageSource: '../../../../assets/img/join_image.png'
    },
    elPolloLoco: {
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      projectImageSource: '../../../../assets/img/pollo_loco.png'
    },
    daBubble: {
      title: 'DABubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS', 'HTML'],
      projectImageSource: '../../../../assets/img/da-bubble.png'
    }
  }

  onMouseEnter(projectname: string) {
    if (projectname == this.projects.join) {
      this.isHoveredJoin = true;
    } else if (projectname == this.projects.elPolloLoco) {
      this.isHoveredPolloLoco = true;
    } else if (projectname == this.projects.daBubble) {
      this.isHoveredDABubble = true;
    }
  }

  onMouseLeave(projectName: string) {
    if (projectName == this.projects.join) {
      this.isHoveredJoin = false;
    } else if (projectName == this.projects.elPolloLoco) {
      this.isHoveredPolloLoco = false;
    } else if (projectName == this.projects.daBubble) {
      this.isHoveredDABubble = false;
    }
  }

  openSingleProjectInBigPopUp(projectName: string) {
    console.log('Hier kommt der Projektname: ', projectName);
    if (this.isOverlayVisible == true) {
      this.isOverlayVisible = false;
    } else if (this.isOverlayVisible == false) {
      this.isOverlayVisible = true;
    }
  }
}