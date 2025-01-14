import { Routes } from '@angular/router';
import { PersonPresentationComponent } from './person-presentation/person-presentation.component';
import { PersonDescriptionComponent } from './person-description/person-description.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path: '', component: PersonPresentationComponent },
    { path: 'person-description', component: PersonDescriptionComponent },
    // { path: '', component: ProjectsComponent },
    // { path: '', component: SkillsComponent }
];
