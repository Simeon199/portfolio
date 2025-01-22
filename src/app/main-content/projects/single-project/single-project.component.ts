import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() title!: string;
  @Input() technologies!: string;

  // isHovered: boolean = false;

  // onMouseEnter() {
  //   this.isHovered = true;
  // }

  // onMouseLeave() {
  //   this.isHovered = false;
  // }
}
