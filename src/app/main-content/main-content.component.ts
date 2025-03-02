import { Component } from '@angular/core';
import { PersonPresentationComponent } from "./person-presentation/person-presentation.component";
import { PersonDescriptionComponent } from './person-description/person-description.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecencyComponent } from './recency/recency.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    PersonPresentationComponent,
    PersonDescriptionComponent,
    SkillsComponent,
    ProjectsComponent,
    RecencyComponent,
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent { }
