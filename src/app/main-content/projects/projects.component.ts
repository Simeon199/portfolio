import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectFadedInComponent } from './single-project-faded-in/single-project-faded-in.component';
import { Projects } from './projects.model';
import { ProjectImageSources } from './projects.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SingleProjectComponent,
    SingleProjectFadedInComponent,
    SingleProjectFadedInComponent,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  isHoveredJoin: boolean = false;
  isHoveredPolloLoco: boolean = false;
  isHoveredDABubble: boolean = false;

  projects: Projects = {
    join: 'Join',
    elPolloLoco: 'El Pollo Loco',
    daBubble: 'DA Bubble'
  };

  projectImageSources: ProjectImageSources = {
    joinImageSrc: '../../../../assets/img/join_image.png',
    elPolloLocoImageSrc: '../../../../assets/img/pollo_loco.png',
    daBubbleImageSrc: '../../../../assets/img/da-bubble.png'
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
}
