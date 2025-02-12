import { Component } from '@angular/core';
import { PersonPresentationComponent } from "./person-presentation/person-presentation.component";
import { PersonDescriptionComponent } from './person-description/person-description.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecencyComponent } from './recency/recency.component';
import { ContactComponent } from './contact/contact.component';
// import { DatabaseServiceComponent } from '../database-service/database-service.component';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    PersonPresentationComponent,
    PersonDescriptionComponent,
    SkillsComponent,
    ProjectsComponent,
    RecencyComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  constructor(private dbService: DatabaseService) { }

  addEntry() {
    this.dbService.getTranslation('hallo');
  }
}
