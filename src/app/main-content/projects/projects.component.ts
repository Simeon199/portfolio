import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectFadedInComponent } from './single-project-faded-in/single-project-faded-in.component';
import { Projects } from './projects.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SingleProjectComponent,
    SingleProjectFadedInComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  isHovered: boolean = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
  // onMouseLeave() {
  //   throw new Error('Method not implemented.');
  // }
  // onMouseEnter() {
  //   throw new Error('Method not implemented.');
  // }
  projects: Projects = {
    join: 'Join',
    elPolloLoco: 'El Pollo Loco',
    daBubble: 'DA Bubble'
  };
}
