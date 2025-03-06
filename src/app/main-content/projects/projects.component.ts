import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectFadedInComponent } from './single-project-faded-in/single-project-faded-in.component';
import { OverlayComponent } from './overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { projectsData } from './projects.data';
import { projectsModel } from './projects.model';
import { LanguageService } from '../../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SingleProjectFadedInComponent,
    SingleProjectComponent,
    OverlayComponent,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  currentHoveredProject: string = '';
  currentHoveredProjectImageSrc: string = '';
  currentHoveredProjectIndex: string = '';

  hoveredProjectLocation = '';

  currentProjectOpened: string = '';
  currentProjectOpenedDescription: string = '';
  currentProjectOpenedImageSrc: string = '';
  currentProjectOpenedTechnologies: string[] = [];
  currentProjectOpenedIndexAsString: string = '';
  currentProjectOpenedGitHubLink: string = '';
  currentProjectOpenedProjectLink: string = '';

  isOverlayVisible = false;
  projectsData = projectsData;
  projectsArray = Object.values(this.projectsData);

  currentLanguage: string = "de";
  allProjects: projectsModel = projectsData;

  constructor(private languageService: LanguageService, public sharedService: SharedService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  updateVariablesFromChild(updatedValues: {
    currentProjectOpened: string,
    currentProjectOpenedDescription: string,
    currentProjectOpenedImageSrc: string,
    currentProjectOpenedTechnologies: string[],
    currentHoveredProjectIndex: string,
    currentProjectOpenedGitHubLink: string,
    currentProjectOpenedProjectLink: string;
  }) {
    this.currentProjectOpened = updatedValues.currentProjectOpened;
    this.currentProjectOpenedDescription = updatedValues.currentProjectOpenedDescription;
    this.currentProjectOpenedImageSrc = updatedValues.currentProjectOpenedImageSrc;
    this.currentProjectOpenedTechnologies = updatedValues.currentProjectOpenedTechnologies;
    this.currentHoveredProjectIndex = updatedValues.currentHoveredProjectIndex;
    this.currentProjectOpenedGitHubLink = updatedValues.currentProjectOpenedGitHubLink;
    this.currentProjectOpenedProjectLink = updatedValues.currentProjectOpenedProjectLink;
  }

  onMouseEnter(projectname: string, projectImageSource: string, projectIndex: string) {
    if (window.innerWidth > 1350) {
      this.currentHoveredProject = projectname;
      this.currentHoveredProjectImageSrc = projectImageSource;
      this.currentHoveredProjectIndex = projectIndex;
    }
  }

  onMouseLeave() {
    if (window.innerWidth > 1350) {
      this.currentHoveredProject = '';
      this.currentHoveredProjectImageSrc = '';
    }
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
    } else if (currentHoveredProject == "DABubble - coming soon)") {
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
    this.sharedService.manageHideShowOverflow(true);
    this.generateRemainingProjectInformation();
  }

  generateRemainingProjectInformation() {
    Object.values(this.projectsData).forEach(project => {
      if (project.title == this.currentProjectOpened) {
        this.currentProjectOpenedDescription = project.description;
        this.currentProjectOpenedImageSrc = project.projectImageSource;
        this.currentProjectOpenedTechnologies = project.technologyList;
        this.currentProjectOpenedGitHubLink = project.gitHubLink;
        this.currentProjectOpenedProjectLink = project.projectLink;
        this.currentHoveredProjectIndex = project.projectIndexAsString;
      }
    })
  }

  closeOverlay() {
    this.isOverlayVisible = false;
  }
}