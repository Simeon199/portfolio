import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent { }
