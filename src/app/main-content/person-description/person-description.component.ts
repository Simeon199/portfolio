import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-person-description',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './person-description.component.html',
  styleUrl: './person-description.component.scss'
})
export class PersonDescriptionComponent {

}
