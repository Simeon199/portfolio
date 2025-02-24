import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-technology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-technology.component.html',
  styleUrl: './single-technology.component.scss'
})
export class SingleTechnologyComponent {
  @Input() technologyImgSrc: string = '';
  @Input() technologyName: string = ''
}
