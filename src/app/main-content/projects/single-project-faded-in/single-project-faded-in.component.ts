import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-single-project-faded-in',
  standalone: true,
  imports: [],
  templateUrl: './single-project-faded-in.component.html',
  styleUrl: './single-project-faded-in.component.scss'
})
export class SingleProjectFadedInComponent {
  @Input() imageSource!: string;
}
