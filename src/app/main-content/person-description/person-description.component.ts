import { Component } from '@angular/core';
import { DescriptionWrapperComponent } from '../shared/description-wrapper/description-wrapper.component';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-person-description',
  standalone: true,
  imports: [
    DescriptionWrapperComponent,
    NgOptimizedImage
  ],
  templateUrl: './person-description.component.html',
  styleUrl: './person-description.component.scss'
})
export class PersonDescriptionComponent {

}
