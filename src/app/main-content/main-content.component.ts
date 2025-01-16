import { Component } from '@angular/core';
import { PersonPresentationComponent } from "./person-presentation/person-presentation.component";
import { PersonDescriptionComponent } from './person-description/person-description.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    PersonPresentationComponent,
    PersonDescriptionComponent,
    SkillsComponent,
    MyProjectsComponent,
    FooterComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
