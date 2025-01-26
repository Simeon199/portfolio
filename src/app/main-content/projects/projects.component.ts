import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectFadedInComponent } from './single-project-faded-in/single-project-faded-in.component';
import { OverlayComponent } from './overlay/overlay.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SingleProjectFadedInComponent,
    SingleProjectComponent,
    OverlayComponent,
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  currentHoveredProject: string = '';
  currentHoveredProjectImageSrc: string = '';
  currentHoveredProjectIndex: string = '0';

  hoveredProjectLocation = '';

  currentProjectOpened: string = '';
  currentProjectOpenedDescription: string = '';
  currentProjectOpenedImageSrc: string = '';
  currentProjectOpenedTechnologies: string = '';

  isOverlayVisible = false;

  allProjectsListed = [
    {
      index: '01',
      title: 'Join',
      description: 'What is this project about? Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: 'HTML | CSS | JavaScript',
      projectImageSource: '../../../../assets/img/join_image.png'
    },
    {
      index: '02',
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'HTML | CSS | JavaScript',
      projectImageSource: '../../../../assets/img/pollo_loco.png'
    },
    {
      index: '03',
      title: 'DABubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization',
      technologies: 'Angular | TypeScript | Firebase | SCSS | HTML',
      projectImageSource: '../../../../assets/img/da-bubble.png'
    }
  ];

  onMouseEnter(projectname: string, projectImageSource: string, projectIndex: string) {
    this.currentHoveredProject = projectname;
    this.currentHoveredProjectImageSrc = projectImageSource;
    this.currentHoveredProjectIndex = projectIndex;
  }

  onMouseLeave() {
    this.currentHoveredProject = '';
    this.currentHoveredProjectImageSrc = '';
  }

  returnRightLocation(currentHoveredProject: string) {
    let style: any = '';
    this.setHoveredProjectLocation(currentHoveredProject)
    style = this.hoveredProjectLocation;
    return style;
  }

  setHoveredProjectLocation(currentHoveredProject: string) {
    if (currentHoveredProject == "Join") {
      this.hoveredProjectLocation = "align-self: flex-start";
    } else if (currentHoveredProject == "El Pollo Loco") {
      this.hoveredProjectLocation = "align-self: center";
    } else {
      this.hoveredProjectLocation = "align-self: flex-end";
    }
  }

  openSingleProjectInBigPopUp(projectName: string) {
    this.currentProjectOpened = projectName;
    if (this.isOverlayVisible == true) {
      this.isOverlayVisible = false;
    } else if (this.isOverlayVisible == false) {
      this.isOverlayVisible = true;
    }
    this.generateRemainingProjectInformation();
  }

  generateRemainingProjectInformation() {
    this.allProjectsListed.forEach(project => {
      if (project.title == this.currentProjectOpened) {
        this.currentProjectOpenedDescription = project.description;
        this.currentProjectOpenedImageSrc = project.projectImageSource;
        this.currentProjectOpenedTechnologies = project.technologies;
      }
    })
  }

  closeOverlay() {
    this.isOverlayVisible = false;
  }
}