import { Component } from '@angular/core';
import { ButtonStyleComponent } from '../shared/button-style/button-style.component';

@Component({
  selector: 'app-person-presentation',
  standalone: true,
  imports: [ButtonStyleComponent],
  templateUrl: './person-presentation.component.html',
  styleUrl: './person-presentation.component.scss'
})
export class PersonPresentationComponent { }
