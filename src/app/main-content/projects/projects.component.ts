import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { Projects } from './projects.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects: Projects = {
    join: 'Join',
    elPolloLoco: 'El Pollo Loco',
    daBubble: 'DA Bubble'
  };
}
