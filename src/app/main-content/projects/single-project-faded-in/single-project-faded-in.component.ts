import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single-project-faded-in',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './single-project-faded-in.component.html',
  styleUrl: './single-project-faded-in.component.scss'
})
export class SingleProjectFadedInComponent {
  @Input() imageSource: string | undefined = '';
  @Input() ngStyle: string | undefined;
}
