import { Component } from '@angular/core';
import { DescriptionWrapperComponent } from '../shared/description-wrapper/description-wrapper.component';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    DescriptionWrapperComponent,
    ButtonStyleComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
