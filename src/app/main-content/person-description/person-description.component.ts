import { Component } from '@angular/core';
import { DescriptionWrapperComponent } from '../shared/description-wrapper/description-wrapper.component';


@Component({
  selector: 'app-person-description',
  standalone: true,
  imports: [DescriptionWrapperComponent],
  templateUrl: './person-description.component.html',
  styleUrl: './person-description.component.scss'
})
export class PersonDescriptionComponent {

}
