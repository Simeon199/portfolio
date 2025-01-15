import { Component } from '@angular/core';
import { PersonPresentationComponent } from "./person-presentation/person-presentation.component";

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [PersonPresentationComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainComponentComponent {

}
