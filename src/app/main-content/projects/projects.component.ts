import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectFadedInComponent } from './single-project-faded-in/single-project-faded-in.component';
import { OverlayComponent } from './overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { TECHNOLOGY_DATA } from './projects.data';

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
  currentProjectOpenedTechnologies: string[] = [];
  currentProjectOpenedIndexAsString = '';

  isOverlayVisible = false;
  technologyData = TECHNOLOGY_DATA;
  technologyArray = Object.values(this.technologyData);

  updateVariablesFromChild(updatedValues: {
    currentProjectOpened: string,
    currentProjectOpenedDescription: string,
    currentProjectOpenedImageSrc: string,
    currentProjectOpenedTechnologies: string[],
    currentHoveredProjectIndex: string
  }) {
    this.currentProjectOpened = updatedValues.currentProjectOpened;
    this.currentProjectOpenedDescription = updatedValues.currentProjectOpenedDescription;
    this.currentProjectOpenedImageSrc = updatedValues.currentProjectOpenedImageSrc;
    this.currentProjectOpenedTechnologies = updatedValues.currentProjectOpenedTechnologies;
    this.currentHoveredProjectIndex = updatedValues.currentHoveredProjectIndex;
  }

  onMouseEnter(projectname: string, projectImageSource: string, projectIndex: string) {
    this.currentHoveredProject = projectname;
    this.currentHoveredProjectImageSrc = projectImageSource;
    this.currentHoveredProjectIndex = projectIndex;
    console.log('technology array value: ', this.technologyArray);
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
    } else if (currentHoveredProject == "DABubble") {
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
    Object.values(this.technologyData).forEach(project => {
      if (project.title == this.currentProjectOpened) {
        this.currentProjectOpenedDescription = project.description;
        this.currentProjectOpenedImageSrc = project.projectImageSource;
        this.currentProjectOpenedTechnologies = project.technologyList;
      }
    })
  }

  closeOverlay() {
    this.isOverlayVisible = false;
  }
}